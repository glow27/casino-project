import express from 'express';

import { userLogged, userLoggedOut } from '../middleware/checkAuth.js';

import odds from '../utils/odds.js';

const router = express.Router();


router.get('/soccerodds', async (req, res) => {


  
  let data = await odds();

  data = data.map(el =>{ return {...el, odd1: el.odd1.toFixed(2), odd2: el.odd2.toFixed(2)}})
  
  res.json({data})
});

export default router;
// userLogged
