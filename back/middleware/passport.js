// import passport from 'passport';
import LocalStrategy from 'passport-local';
import { default as passportVk } from 'passport-vkontakte';
import { default as passportYandex } from 'passport-yandex';
import bcrypt from 'bcrypt';

import User from '../model/user.js';

const YandexStrategy = passportYandex.Strategy;
const VKStrategy = passportVk.Strategy;

LocalStrategy.Strategy;

export default function (passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
      },
      async (username, password, done) => {
        try {
          const user = await User.findOne({
            email: username,
          });
          if (user && (await bcrypt.compare(password, user.password))) {
            done(null, user);
          } else {
            return done(null, false, {
              message: 'fuck that!',
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
    )
  );

  passport.use(
    new YandexStrategy(
      {
        clientID: process.env.YANDEX_CLIENT_ID,
        clientSecret: process.env.YANDEX_CLIENT_SECRET,
        callbackURL: 'http://localhost:4000/login/yandex/callback',
      },
      
        async (accessToken, refreshToken,  profile, done) => {
          const newUser = {
            yandID: profile.id,
            name: profile.name.givenName,
            email: profile.emails[0].value,
            points: 50,
          };
          try {
            let user = await User.findOne({
              yandID: profile.id,
              email: profile.emails[0].value,
            });
            if (user) {
              done(null, user);
            } else {
              user = await User.create(newUser);
              done(null, user);
            }
          } catch (e) {
            console.log(e);
          }
        }
    )
  );

  passport.use(
    new VKStrategy(
      {
        // VK.com docs call it 'API ID', 'app_id', 'api_id', 'client_id' or 'apiId'
        clientID: process.env.VKONTAKTE_APP_ID,
        clientSecret: process.env.VKONTAKTE_APP_SECRET,
        callbackURL: '/login/vkontakte/callback',
      },
      async (accessToken, refreshToken, params, profile, done) => {
        const newUser = {
          vkID: profile.id,
          name: profile.name.givenName,
          email: profile.emails[0].value,
          points: 50,
        };
        try {
          let user = await User.findOne({
            vkID: profile.id,
            email: profile.emails[0].value,
          });
          if (user) {
            done(null, user);
          } else {
            user = await User.create(newUser);
            done(null, user);
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
