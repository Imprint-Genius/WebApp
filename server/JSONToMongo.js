'use strict';
/*
  Import modules/files you may need to correctly run the script.
 */
import { readJsonFile } from './readFile/readFile.js';
import User from './models/UserModel.js';
import Order from './models/OrderModel.js';
import { connectToDatabase } from './connectMongodb.js';
import mongoose from 'mongoose';

const connectToDB = () => {
	return connectToDatabase().on(
		'error',
		console.error.bind(console, 'MongoDB connection error:')
	);
};

const countUsers = async () => {
	// This prints the count to the console
	// FootballClub.countDocuments({}, (err, c) => console.log("count is", c))
	// This returns a promise that stores the count and has to be awaited
	const docCount = await User.countDocuments({})
		.then((num) => {
			return num;
		})
		.catch((err) => {
			throw err;
		});
	return docCount;
};
const countOrders = async () => {
	// This prints the count to the console
	// FootballClub.countDocuments({}, (err, c) => console.log("count is", c))
	// This returns a promise that stores the count and has to be awaited
	const docCount = await Order.countDocuments({})
		.then((num) => {
			return num;
		})
		.catch((err) => {
			throw err;
		});
	return docCount;
};

const reportUsers = async (err, str) => {
	if (err) {
		throw err;
	}
	const c = await countUsers();
	console.log(str, c);
};
const reportOrders = async (err, str) => {
	if (err) {
		throw err;
	}
	const c = await countOrders();
	console.log(str, c);
};

const saveUsersDataInDB = async (user) => {
	//save all clubs into the database
	return await new Promise(async (res, rej) => {
		User.insertMany(user, async (err, docs) => {
			if (err) rej(err);
			res(docs);
		});
	});
};
const saveOrdersDataInDB = async (order) => {
	//save all clubs into the database
	return await new Promise(async (res, rej) => {
		Order.insertMany(order, async (err, docs) => {
			if (err) rej(err);
			res(docs);
		});
	});
};

const deleteUsersDataInDB = async () => {
	//delete all clubs from the database
	return await User.deleteMany((err) => {
		if (err) throw err;
	});
};
const deleteOrdersDataInDB = async () => {
	//delete all clubs from the database
	return await Order.deleteMany((err) => {
		if (err) throw err;
	});
};

const main = async () => {
	connectToDB();
	/*
    Instantiate a mongoose model for each football club object in the JSON file,
    and then save it to your Mongo database
    //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

    Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
   */
	//delete the existing entries to start fresh
	await deleteUsersDataInDB();
	await deleteOrdersDataInDB();
	//checking if the documents have been deleted successfully
	await reportUsers(null, 'Users deleted, there are now %d Users.');
	await reportOrders(
		null,
		'Orders deleted, there are now %d Orders.'
	);
	//read file and return the data
	readJsonFile('./server/orders')
		.then(async (orderData) => {
			//save the data into the database
			await saveOrdersDataInDB(orderData)
				.then(async (data) => {
					//check if the footballClub data has been saved successfully
					await reportOrders(
						null,
						'All %d documents have been added.'
					);
					mongoose.disconnect();
				})
				.catch((err) => {
					console.error(err);
				});
		})
		.catch((err) => {
			console.error(err);
		});
	readJsonFile('./server/users')
		.then(async (userData) => {
			//save the data into the database
			await saveUsersDataInDB(userData)
				.then(async (data) => {
					//check if the footballClub data has been saved successfully
					await reportUsers(
						null,
						'All %d documents have been added.'
					);
					mongoose.disconnect();
				})
				.catch((err) => {
					console.error(err);
				});
		})
		.catch((err) => {
			console.error(err);
		});
};
export { main };
main();
