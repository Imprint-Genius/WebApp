/* This file is your server orderRouter. 
   Trace the dependencies so you understand which files are connected and how data is passed between them
   For each route, make note of the sequence of requests called for each

*/

import * as orderController from '../controllers/orderController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const orderRouter = express.Router();
/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 
  Note: the orderController variable above and the file it is connected to help you trace
 */
orderRouter.get('/', orderController.getAllOrders);
orderRouter.post('/', orderController.createOrder);

/*
  The ':' specifies a URL parameter. 
  Also, it allows the passing of data which is stored in req.params in the controller
 */
orderRouter.get('/get/:orderID', orderController.getOrderByOrderById);
orderRouter.get(
	'/getByUserID/:userID',
	orderController.getOrderByUserId
);
// orderRouter.get(
// 	'/:orderID/:supplier',
// 	orderController.getOrderByOrderIDAndSupplier
// );
// orderRouter.get(
// 	'/:userID/:isComplete',
// 	orderController.getOrderByCompeletionStatus
// );
orderRouter.put('/put/:orderID', orderController.updateOrder);
orderRouter.delete('/delete/:orderID', orderController.removeOrder);

//orderRouter.get('/:isAdmin', orderController.getAllAdmins);

export default orderRouter;
