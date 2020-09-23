import express from 'express';

import middleWare from './middleware/app.js';
import loginRouter from './routes/login.js';
import casinoRouter from './routes/casino.js';

const app = express();

middleWare(app);
app.use((req, res, next) => {
  console.log(req.user);
  next()
})

app.use('/login', loginRouter);
app.use('/casino', casinoRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`we play on ${PORT}`));
