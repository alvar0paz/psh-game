import express from 'express';
import cors from 'cors';
import cron from 'node-cron';
import { generateStats } from './scripts/generateStats';
import statsRoutes from './routes/stats';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use('/api/stats', statsRoutes);

cron.schedule('*/5 * * * *', async () => {
  console.log('Running cron job to generate stats...');
  await generateStats();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
