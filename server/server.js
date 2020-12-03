import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config/config.js';
import userRouter from './routes/userRouter.js';
import orderRouter from './routes/orderRouter.js';
import { connectToDatabase } from './connectMongodb.js';
import cors from "cors";


//////////////////////////////////////////////////////////////////////////////////////////

//ONLY ADD THIS LINE IF YOU WANT TO RESTART THE DB
//import { main } from './JSONToMongo.js';
/////////////////////////////////////////////////////////////////////////////////////////

//connect to database
const db = connectToDatabase().on(
	'error',
	console.error.bind(console, 'MongoDB connection error:')
);
db.once('open', () => {
	console.log('Successfully connected to mongoose database!');
});

//initialize app
const app = express();


app.use(cors()) // Use this after the variable declaration


//enable request logging for development debugging
app.use(morgan('dev'));

//body parsing middleware
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(bodyParser.json());

/* serve static files - see http://expressjs.com/en/starter/static-files.html */
//app.use('/', express.static('./../../client'));

/* The next three middleware are important to the API that we are building */

/* Request Handler for route /api/footballClub
   TODO: Update the code to meet the required format - app.use('/api/footballClub', appropriateMiddleWare)
   use the footballClub router middleware for requests to the api
   check the variables list above
*/
app.use('/api/user/', userRouter);
app.use('/api/order/', orderRouter);

/* Request handler for all other routes
   Sends a response (res) to go to the homepage for all routes not specified */
app.all('/*', (req, res) => {
	/*Add YOUR CODE HERE
       see https://expressjs.com/en/api.html#res.sendFile
       see https://nodejs.org/api/path.html
       The path.resolve() method returns a string and resolves a sequence of paths or path segments into an absolute path.
       If no path segments are passed, path.resolve() will return the absolute path of the current working directory.
    */
	res.statusCode === 404
		? res.send('Sorry, information not available')
		: res.sendFile(path.resolve('./client/index.html'));
});

app.listen(config.port, () =>
	console.log(`App now listening on port ${config.port}`)
);
