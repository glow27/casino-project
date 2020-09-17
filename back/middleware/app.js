import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';

export const middleWare = (app) => {
  dotenv.config();
  MongoStore(session);

  mongoose.connect('mongodb://localhost/Finale', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
};
