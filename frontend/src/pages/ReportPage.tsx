import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopScoresTable from '../components/TopScoresTable';
import { exportToCSV } from '../utils/exportToCSV';
import './ReportPage.css';

export interface PlayerStat {
  id: number;
  playerId: string;
  nickname: string;
  profileImage: string;
  createdAt: string;
  score: number;
}

const ReportPage: React.FC = () => {
  const [topScores, setTopScores] = useState<PlayerStat[]>([]);
  const [lastGenerated, setLastGenerated] = useState<string | null>(null);

  const fetchStats = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/stats/top-scores');
      console.log(response)
      setTopScores(response.data.scores);
      setLastGenerated(response.data.lastGenerated);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="report-container">
      <h1>Top 10 Player Scores</h1>
      <TopScoresTable scores={topScores} />
      <p className="last-generated">
        Last stats generation: {lastGenerated ? new Date(lastGenerated).toLocaleString() : 'N/A'}
      </p>
      <button className="export-button" onClick={() => exportToCSV(topScores, 'top_scores.csv')}>
        Export to CSV
      </button>
    </div>
  );
};

export default ReportPage;
