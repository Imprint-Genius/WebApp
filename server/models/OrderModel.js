/* Import mongoose and define any variables needed to create the schema */
import mongoose from 'mongoose';

/* Create your schema for the data in the schools.json file that
 will define how data is saved in your database
     See https://mongoosejs.com/docs/guide.html for examples for creating schemas
     See also 
     https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
  */
const orderSchema = new mongoose.Schema({
	/* Your code for a schema here */
	//Check out - https://mongoosejs.com/docs/guide.html
	orderID: { type: String, required: true },
	cost: { type: Number, required: true },
	supplier: { type: String, required: true },
	createdAt: { type: String, required: true },
	shippingStatus: { type: String, required: true },
	isCompleted: { type: Boolean, required: true },
	deliveredOn: { type: String },
});

/* Use your schema to instantiate a Mongoose model
Export the model to make it available to other parts of your Node application */
//Check out - https://mongoosejs.com/docs/guide.html#models
export default mongoose.model('order', orderSchema);
