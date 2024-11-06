import React from 'react';
import './TopScoresTable.css';

interface PlayerStat {
  id: number;
  playerId: string;
  nickname: string;
  profileImage: string;
  createdAt: string;
  score: number;
}

interface TopScoresTableProps {
  scores: PlayerStat[];
}

const TopScoresTable: React.FC<TopScoresTableProps> = ({ scores }) => {
  return (
    <div className="grid-container">
      {scores.map((player, index) => (
        <div key={player.id} className="card">
          <div className="rank-badge">#{index + 1}</div>
          <img
            className="profile-img"
            src={player.profileImage}
            alt={`${player.nickname}'s profile`}
          />
          <h2 className="player-nickname">{player.nickname}</h2>
          <p className="player-score">Score: {player.score}</p>
        </div>
      ))}
    </div>
  );
};

export default TopScoresTable;
