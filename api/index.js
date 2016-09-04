import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';

const app = express();
const port = process.env.PORT || 2000;
const secret = "Bazs3uw0";

// Set global key
app.set("secret", secret);

// Setup encoding
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup cors
app.use(cors());

// Setup logger
app.use(morgan('dev'));

// Setup routes
routes(app);

// Error handling
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error : err
  });
});

// Listen port
app.listen(port, (err, res) => {
  if (err) {
    throw err;
  }
  console.info('server start with localhost:', port);
});
