import axios from 'axios';

async function odds() {
  const response = await axios({
    method: 'GET',
    url: 'https://odds.p.rapidapi.com/v1/odds',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'odds.p.rapidapi.com',
      'x-rapidapi-key': '6af9db4afcmshe6cbf70837c034cp15045bjsn5ebe0d1762f2',
      useQueryString: true,
    },
    params: {
      sport: 'soccer_epl',
      region: 'uk',
      mkt: 'h2h',
    },
  });

  const data = response.data.data;

  const games = [];

  data.map((el) =>
    games.push({
      team1: el.teams[0],
      odd1:
        el.sites.reduce((a, b, i, array) => {
          return a + array[i].odds.h2h[0];
        }, 0) / el.sites.length,
      team2: el.teams[1],
      odd2:
        el.sites.reduce((a, b, i, array) => {
          return a + array[i].odds.h2h[1];
        }, 0) / el.sites.length,
    })
  );

  const predictions = games.filter((el) => {
    if (
      ((el.odd1 <= 1.7 && el.odd1 >= 1.4) ||
        (el.odd2 <= 1.7 && el.odd2 >= 1.4)) &&
      Math.abs(el.odd1 - el.odd2) > 2
    ) {
      return el;
    }
  });

  return predictions
}



export default odds;
