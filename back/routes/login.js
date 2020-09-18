import express from 'express';
import passport from 'passport';
import User from '../model/user.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  // console.log(req.body);
  // const newUser = new User({
  //   name: 'pre'
  // });
  // await newUser.save();
  // res.status(200).send();
  passport.authenticate('local', (err, user, info) => {
    console.log(user);
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!user) {
      console.log('gde');
    }
    req.login(user, (err) => {
      console.log('zdes');
    });
  })(req, res, next);
});

export default router
