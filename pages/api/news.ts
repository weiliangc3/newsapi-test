import type { NextApiRequest, NextApiResponse } from 'next';

// too lazy to specify structure,
// also too lazy to install axios just to make api calls

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { query } = req.query;
  await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.APIKEY}&q=${query}`)
    .then((response) => {
      response.json().then((data) => {
        res.status(200).json(data);
      });
    });
}
