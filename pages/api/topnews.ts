import type { NextApiRequest, NextApiResponse } from 'next';

// Using US. Could find a way to get country of request, geoip-lite or something.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.APIKEY}`);
  const data = await response.json();
  res.status(200).json(data);
}
