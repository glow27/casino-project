import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import {default as connectMongo} from 'connect-mongo';
import casinoPassport from './passport.js';

const middleWare = (app) => {
  app.use(cors());
  dotenv.config();
  const MongoStore = connectMongo(session);
  
  mongoose.connect('mongodb://localhost/Finale', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  
  app.use(morgan('dev'));
  // app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  // app.use(express.static('???'))
  
  app.use(
    session({
      store: new MongoStore({ mongooseConnection: mongoose.connection, secret: 'squirrel', ttl: 60 }),
      secret: process.env.SESSION_KEY,
      resave: false,
      saveUninitialized: false,
      name: 'user_sid',
      
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
  casinoPassport(passport);

};

export default middleWare;
