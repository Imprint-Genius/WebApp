/* This file is your server userRouter. 
   Trace the dependencies so you understand which files are connected and how data is passed between them
   For each route, make note of the sequence of requests called for each

*/

import * as userController from '../controllers/userController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const userRouter = express.Router();
/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 
  Note: the userController variable above and the file it is connected to help you trace
 */
userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.createUser);

/*
  The ':' specifies a URL parameter. 
  Also, it allows the passing of data which is stored in req.params in the controller
 */
userRouter.get('/:userID', userController.readUser);
userRouter.get('/:username', userController.getUserByUsername);
userRouter.get('/:email', userController.getUserByEmail);
userRouter.put('/:userID', userController.updateUser);
userRouter.delete('/:userID', userController.removeUser);
userRouter.get('/:isAdmin', userController.getAllAdmins);

export default userRouter;
