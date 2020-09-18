import express from 'express';
import passport from 'passport';
import bcrypt from 'bcrypt';
import User from '../model/user.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).end();
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.end();
    });
  })(req, res, next);
});

router.post('/new', async (req, res) => {
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

router.get('/vkontakte', passport.authenticate('vkontakte', { scope: ['email'] }));

router.get(
  '/vkontakte/callback',
  passport.authenticate('vkontakte', {
    failureRedirect: 'http://localhost:3000/login',
  }),
  (req, res) => {
    console.log(req.user)
    
    res.redirect('http://localhost:3000/');
  }
);

router.get('/close', (req, res) => {
  req.logout();
  return res.status(401).end();
});

export default router
