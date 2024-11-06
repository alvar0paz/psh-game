import connection from '../db/connection';

interface PlayerStats {
  id?: number;
  playerId: string;
  nickname: string;
  profileImage: string;
  createdAt: Date;
  score: number;
}

export async function insertPlayerStat(stat: PlayerStats): Promise<void> {
  const query = `
    INSERT INTO player_stats (playerId, nickname, profileImage, createdAt, score)
    VALUES (?, ?, ?, ?, ?)
  `;
  await connection.execute(query, [
    stat.playerId,
    stat.nickname,
    stat.profileImage,
    stat.createdAt,
    stat.score,
  ]);
}

export async function getTopScores(limit: number): Promise<PlayerStats[]> {
  const [rows] = await connection.query(
    `SELECT * FROM player_stats ORDER BY score DESC LIMIT ?`,
    [limit]
  );
  return rows as PlayerStats[];
}

export async function getLastGeneratedTimestamp(): Promise<Date | null> {
  const [rows]: any[] = await connection.execute(
    `SELECT MAX(createdAt) as lastGenerated FROM player_stats`
  );
  return rows[0]?.lastGenerated || null;
}
