import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../model/user.js';

LocalStrategy.Strategy;

export default function(passport) {
passport.use(
  new LocalStrategy(
    async (username, password, done) => {
      try {
        const user = await User.findOne({
          name: 'yao',
        });
        if (user) {
          console.log(user);
          done(null, user);
        } else {
          return done(null, false, { message: 'User is not found, please register' });
        }
      } catch (e) {
        console.log(e);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
}
