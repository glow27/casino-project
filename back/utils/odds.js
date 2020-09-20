import axios from 'axios';

async function odds() {
  const response = await axios({
    "method":"GET",
    "url":"https://odds.p.rapidapi.com/v1/odds",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"odds.p.rapidapi.com",
    "x-rapidapi-key":"6af9db4afcmshe6cbf70837c034cp15045bjsn5ebe0d1762f2",
    "useQueryString":true
    },"params":{
    "sport":"soccer_epl",
    "region":"uk",
    "mkt":"h2h"
    }
    });
    
  console.log(response.data);
}
odds()
