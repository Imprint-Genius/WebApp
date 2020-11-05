/* Dependencies */
import Order from '../models/OrderModel.js';
/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update order s.
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send the order  as JSON in the response.

  HINT: if you are struggling with implementing these functions refer back to this tutorial 
  https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
  or
  https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
  

  If you are looking for more understanding of exports and export modules - 
  https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
  or
  https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910
 */

/* Create a order  */
export const createOrder = async (req, res) => {
	/* get the order  data from req.body */
	/* Then save the Order to the database */
	const order = req.body;
	if (!order) {
		return res.status(200).send({
			error: 'Order not found',
		});
	}
	await new Order(order)
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(200).send(err);
		});
};

/* Show the current Order */
export const readOrder = async (req, res) => {
	/*get the order  id from the req.params */
	/* send back the Order data as json from the request */
	/* If the Order data could not be found, be sure to send back a response in the following format: {error: 'Some message that indicates an error'} */
	let id = req.params.orderID;
	await Order.findById(id)
		.then((order) => {
			if (!order) {
				return res.status(200).send({
					error: 'order not found with an Id ' + id,
				});
			}
			res.json(order);
		})
		.catch((err) => {
			res.status(200).send({
				error: err.message || 'An unknown error has occurred.',
			});
		});
};

/* Show the current Order */
export const getOrderByOrderById = async (req, res) => {
	/*get the order  id from the req.params */
	/* send back the Order data as json from the request */
	/* If the Order data could not be found, be sure to send back a response in the following format: {error: 'Some message that indicates an error'} */
	let _id_ = req.params.orderID;
	await Order.find({ orderID: _id_ })
		.then((order) => {
			if (!order) {
				return res.status(200).send({
					error: 'order not found with ordername ' + id,
				});
			}
			res.json(order);
		})
		.catch((err) => {
			res.status(200).send({
				error: err.message || 'An unknown error has occurred.',
			});
		});
};
// /* Show the current Order */
// export const getOrderByOrderIDAndSupplier = async (req, res) => {
// 	/*get the order  id from the req.params */
// 	/* send back the Order data as json from the request */
// 	/* If the Order data could not be found, be sure to send back a response in the following format: {error: 'Some message that indicates an error'} */
// 	let _id_ = req.params.orderID;
// 	let _supplier_ = req.params.supplier;
// 	await Order.find({ id: _id_, supplier: _supplier_ })
// 		.then((order) => {
// 			if (!order) {
// 				return res.status(200).send({
// 					error: 'order not found with ordername ' + id,
// 				});
// 			}
// 			res.json(order);
// 		})
// 		.catch((err) => {
// 			res.status(200).send({
// 				error: err.message || 'An unknown error has occurred.',
// 			});
// 		});
// };

/* Update a Order - note the order in which this function is called by the router*/
export const updateOrder = async (req, res) => {
	/*get both the order  id and new data from the request */
	/* Replace the Orders's properties which is in the database with the new properties found in what the new data */
	/* Save the Order */
	const order = req.body;
	const id = req.params.orderID;
	if (!order) {
		return res.status(200).send({
			error: 'Order not found',
		});
	}

	await Order.findById(id)
		.then((data) => {
			data.ordername = order.ordername;
			data.password = order.password;
			data.email = order.email;
			data.isAdmin = order.isAdmin;
			data.orderIDs = order.orderIDs;
			data
				.save()
				.then((data) => {
					res.json(data);
				})
				.catch((err) => {
					res.status(200).send({
						error: err.message || 'An unknown error has occurred.',
					});
				});
		})
		.catch((err) => {
			res.status(200).send({
				error: err.message || 'An unknown error has occurred.',
			});
		});
};

/* Delete a Order */
export const removeOrder = async (req, res) => {
	/* Add your code to remove the Order */
	/* If the Order could not be found, be sure to send back a response in the following format: {error: 'Some message that indicates an error'} */
	let id = req.params.orderID;

	await Order.deleteOne({ _id: id }, (err) => {
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

/* Retrieve all the directory, Orders*/
export const getAllOrders = async (req, res) => {
	/* Add your code. Make sure to send the documents as a JSON response.*/
	await Order.find({}, (err, data) => {
		if (err)
			return res.status(200).send({
				message: err.message || 'An unknown error occurred',
			});
		res.json(data);
	});
};

// /* Retrieve all the directory, Orders*/
// export const getAllAdmins = async (req, res) => {
// 	/* Add your code. Make sure to send the documents as a JSON response.*/
// 	await Order.find({ isAdmin: true }, (err, data) => {
// 		if (err)
// 			return res.status(200).send({
// 				message: err.message || 'An unknown error occurred',
// 			});
// 		res.json(data);
// 	});
// };

// /* Delete a Order */
// export const deleteByConference = async (req, res) => {
// 	/* Add your code to remove the Order */
// 	/* If the Order could not be found, be sure to send back a response in the following format: {error: 'Some message that indicates an error'} */
// 	let _conference_ = req.params.conference;

// 	await Order.deleteMany({ conference: _conference_ }, (err) => {
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
