require('dotenv').config();

var createError = require('http-errors');
import express, {
  Express,
  Request,
  Response,
  NextFunction
} from 'express';

var logger = require('morgan');

var walletRouter = require('../routes/wallet')

const app: Express = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use('/api/wallet', walletRouter)
// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

app.listen(3001, () => console.log('App listening on port 3000!'));

module.exports = app;