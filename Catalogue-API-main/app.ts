import express from 'express';
import apiRouter from './routes';
import cors from "cors";

const app = express();
const port = 3000; // default port to listen

app.use(express.json({ strict: false }));
app.use(express.static('public'));
app.use(cors());

// define a route handler for the default home page
app.use('/', apiRouter);

// start the Express server
app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
