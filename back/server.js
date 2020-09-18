import express from 'express';

import middleWare from './middleware/app.js';
import loginRouter from './routes/login.js';

const app = express();

middleWare(app);

app.use('/login', loginRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`we play on ${PORT}`));
