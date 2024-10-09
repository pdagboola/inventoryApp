const pool = require("./pool");

async function createDatabase() {
  await pool.query(`CREATE TABLE IF NOT EXISTS games(
    id INT PRIMARY KEY,
    title VARCHAR(255),
    release_date DATE,
    rating FLOAT,
    img_url VARCHAR(255)
    );`);
  await pool.query(`CREATE TABLE IF NOT EXISTS genre(
    id INT PRIMARY KEY,
    name VARCHAR(255),
    );`);
  await pool.query(` CREATE TABLE IF NOT EXISTS developer(
    id INT PRIMARY KEY,
    name VARCHAR(255),
    );`);
  await pool.query(`CREATE TABLE IF NOT EXISTS game_genre(
    games_id INT REFERENCES games(id) ON DELETE CASCADE,
    genre_id INT REFERENCES genre(id) ON DELETE CASCADE,
    PRIMARY KEY (games_id, genre_id)
    );`);
  await pool.query(`CREATE TABLE IF NOT EXISTS game_developer(
    games_id INT REFERENCES games(id) ON DELETE CASCADE,
    developer_id INT REFERENCES developer(id) ON DELETE CASCADE,
    PRIMARY KEY (games_id, developer_id)
    );`);
}

createDatabase();
