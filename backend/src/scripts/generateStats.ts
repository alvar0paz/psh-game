import axios from 'axios';
import { insertPlayerStat } from '../models/PlayerStats';

async function generateRandomStat() {
  const { data } = await axios.get('https://randomuser.me/api/');
  const user = data.results[0];

  const stat = {
    playerId: user.login.uuid,
    nickname: user.login.username,
    profileImage: user.picture.medium,
    createdAt: new Date(),
    score: Math.floor(Math.random() * 100) + 1,
  };

  await insertPlayerStat(stat);
  console.log('Generated stat:', stat);
}

export async function generateStats() { 
  const numStats = Math.floor(Math.random() * 10);
  for (let i = 0; i < numStats; i++) {
    await generateRandomStat();
  }
}

if (require.main === module) {
  generateStats().catch((err) => console.error('Error generating stats:', err));
}
