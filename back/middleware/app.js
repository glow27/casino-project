import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import {default as connectMongo} from 'connect-mongo';
import funfun from './passport.js';


const middleWare = (app) => {

  
  const MongoStore = connectMongo(session);
  dotenv.config();
  

  mongoose.connect('mongodb://localhost/Finale', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.use(cors())
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  
  app.use(
    session({
      store: new MongoStore({ mongooseConnection: mongoose.connection, secret: 'squirrel' }),
      secret: process.env.SESSION_KEY,
      resave: false,
      saveUninitialized: false,
      name: 'user_sid',
      
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
  funfun(passport);

};

export default middleWare;
