/* Dependencies */
import User from '../models/UserModel.js';
/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update user s.
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send the user  as JSON in the response.

  HINT: if you are struggling with implementing these functions refer back to this tutorial 
  https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
  or
  https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
  

  If you are looking for more understanding of exports and export modules - 
  https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
  or
  https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910
 */

/* Create a user  */
export const createUser = async (req, res) => {
	/* get the user  data from req.body */
	/* Then save the User to the database */
	const user = req.body;
	if (!user) {
		return res.status(200).send({
			error: 'User not found',
		});
	}
	await new User(user)
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(200).send(err);
		});
};

/* Show the current User */
export const readUser = async (req, res) => {
	/*get the user  id from the req.params */
	/* send back the User data as json from the request */
	/* If the User data could not be found, be sure to send back a response in the following format: {error: 'Some message that indicates an error'} */
	let id = req.params.userID;
	console.log(id);
	await User.findById(id)
		.then((user) => {
			if (!user) {
				return res.status(200).send({
					error: 'user not found with an Id ' + id,
				});
			}
			res.json(user);
		})
		.catch((err) => {
			res.status(200).send({
				error: err.message || 'An unknown error has occurred.',
			});
		});
};

/* Show the current User */
export const getUserByUsername = async (req, res) => {
	/*get the user  id from the req.params */
	/* send back the User data as json from the request */
	/* If the User data could not be found, be sure to send back a response in the following format: {error: 'Some message that indicates an error'} */
	let _username_ = req.params.username;
	await User.find({ username, _username_ })
		.then((user) => {
			if (!user) {
				return res.status(200).send({
					error: 'user not found with username ' + id,
				});
			}
			res.json(user);
		})
		.catch((err) => {
			res.status(200).send({
				error: err.message || 'An unknown error has occurred.',
			});
		});
};
/* Show the current User */
export const getUserByEmail = async (req, res) => {
	/*get the user  id from the req.params */
	/* send back the User data as json from the request */
	/* If the User data could not be found, be sure to send back a response in the following format: {error: 'Some message that indicates an error'} */
	let _email_ = req.params.email;
	await User.find({ email: _email_ })
		.then((user) => {
			if (!user) {
				return res.status(200).send({
					error: 'user not found with username ' + id,
				});
			}
			res.json(user);
		})
		.catch((err) => {
			res.status(200).send({
				error: err.message || 'An unknown error has occurred.',
			});
		});
};

/* Update a User - note the order in which this function is called by the router*/
export const updateUser = async (req, res) => {
	/*get both the user  id and new data from the request */
	/* Replace the Users's properties which is in the database with the new properties found in what the new data */
	/* Save the User */
	const user = req.body;
	let _id_ = req.params.userID;
	if (!user) {
		return res.status(200).send({
			error: 'User not found',
		});
	}
	await User.updateOne(
		{ _id: _id_ },
		{
			password: user.password,
		}
	)
		.then((user) => {
			if (!user) {
				return res.status(200).send({
					error: 'user not found with username ' + id,
				});
			}
			res.json(user);
		})
		.catch((err) => {
			res.status(200).send({
				error: err.message || 'An unknown error has occurred.',
			});
		});
};

/* Delete a User */
export const removeUser = async (req, res) => {
	/* Add your code to remove the User */
	/* If the User could not be found, be sure to send back a response in the following format: {error: 'Some message that indicates an error'} */
	let id = req.params.userID;

	await User.deleteOne({ _id: id }, (err) => {
		if (err) {
			return res.status(200).send({
				error: err.message || 'An unknown error occurred',
			});
		}
		res.send({
			error: id + ' has been deleted successfully',
		});
	});
};

/* Retrieve all the directory, Users*/
export const getAllUsers = async (req, res) => {
	/* Add your code. Make sure to send the documents as a JSON response.*/
	//console.log('hello1');
	await User.find({}, (err, data) => {
		if (err)
			return res.status(200).send({
				message: err.message || 'An unknown error occurred',
			});
		res.json(data);
	});
	//console.log('hello2');
};

/* Retrieve all the directory, Users*/
export const getAllAdmins = async (req, res) => {
	/* Add your code. Make sure to send the documents as a JSON response.*/
	await User.find({ isAdmin: true }, (err, data) => {
		if (err)
			return res.status(200).send({
				message: err.message || 'An unknown error occurred',
			});
		res.json(data);
	});
};

// /* Delete a User */
// export const deleteByConference = async (req, res) => {
// 	/* Add your code to remove the User */
// 	/* If the User could not be found, be sure to send back a response in the following format: {error: 'Some message that indicates an error'} */
// 	let _conference_ = req.params.conference;

// 	await User.deleteMany({ conference: _conference_ }, (err) => {
// 		if (err) {
// 			return res.status(200).send({
// 				error: err.message || 'An unknown error occurred',
// 			});
// 		}
// 		res.send({
// 			error:
// 				'School with conference: ' +
// 				_conference_ +
// 				' has been deleted successfully',
// 		});
// 	});
// };
