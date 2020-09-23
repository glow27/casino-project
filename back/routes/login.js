import express from 'express';
import passport from 'passport';
import bcrypt from 'bcrypt';
import User from '../model/user.js';
import { userLoggedOut, userLogged } from '../middleware/checkAuth.js';

const router = express.Router();

router.post('/', userLoggedOut, async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log('ok');
      return res.status(401).end();
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      
      return res.json(user);
    });
  })(req, res, next);
});

router.post('/new', userLoggedOut, async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(401).end();
  }
  const hashedPass = await bcrypt.hash(req.body.password, 10);
  const newUser = new User({
    email: req.body.email,
    password: hashedPass,
    name: req.body.name,
    points: 50,
  });
  await newUser.save();
  return res.end();
});

router.get(
  '/vkontakte',
  userLoggedOut,
  passport.authenticate('vkontakte', { scope: ['email'] })
);

router.get(
  '/vkontakte/callback',
  passport.authenticate('vkontakte', {
    failureRedirect: 'http://localhost:3000/login',
  }),
  (req, res) => {
    
    res.redirect(`http://localhost:3000/welcome/?${req.user.id}`);
  }
);

router.get('/yandex', userLoggedOut, passport.authenticate('yandex'));

router.get(
  '/yandex/callback',
  passport.authenticate('yandex', {
    failureRedirect: 'http://localhost:3000/login',
  }),
  (req, res) => {
    res.redirect(`http://localhost:3000/welcome/?${req.user.id}`);
  }
);

router.post('/user', userLogged, async (req, res) => {

  const user = await User.findById(req.body.id);
  if (!user) {
    return res.status(401).end();
  }
  return res.json(user);
});

router.post('/close', userLogged, async (req, res) => {
  
  const user = await User.findById(req.body._id);
  user.points = req.body.points;
  console.log(req.isAuthenticated());
  console.log(user);
  await user.save();
  req.logout();
  
  return res.end();
});

export default router;
