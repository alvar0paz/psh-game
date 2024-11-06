import { Router } from 'express';
import { getTopScores, getLastGeneratedTimestamp } from '../models/PlayerStats';

const statsRoutes = Router();

statsRoutes.get('/top-scores', async (req, res) => {
  try {
    const scores = await getTopScores(10);
    const lastGenerated = await getLastGeneratedTimestamp();
    res.json({ scores, lastGenerated });
  } catch (error) {
    console.error('Error fetching top scores:', error);
    res.status(500).json({ error: 'Failed to fetch top scores' });
  }
});

export default statsRoutes;
