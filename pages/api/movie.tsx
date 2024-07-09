import { NextApiRequest, NextApiResponse } from 'next';
import { getMovies } from '.././utils/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const movies = await getMovies();

  if (movies) {
    res.status(200).json(movies);
  } else {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
}