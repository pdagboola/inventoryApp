const pool = require("./pool");

async function createDatabase() {
  console.log("creating database...");
  await pool.query(`DROP TABLE IF EXISTS game_genre;`);
  await pool.query(`DROP TABLE IF EXISTS game_developer`);
  await pool.query(`DROP TABLE IF EXISTS games;`);
  await pool.query(`CREATE TABLE IF NOT EXISTS games(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    release_date DATE,
    rating FLOAT, 
    img_url VARCHAR(255)
    );`);
  await pool.query(`CREATE TABLE IF NOT EXISTS genre(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
    );`);
  await pool.query(` CREATE TABLE IF NOT EXISTS developer(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
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
  console.log("inserting image...");
  await pool.query(`INSERT INTO games(title, release_date, rating, img_url) 
    VALUES
    ('The witcher', '2015-10-09', 9.5, 'https://cdn-s-thewitcher.cdprojektred.com/witcher3/backgrounds/TW3NG_DLCs_PC_Geralt_Netflix_Armor_RGB-en@2x.jpg'),
    ('FC25','2024-10-03', 7.5, 'https://drop-assets.ea.com/images/4Mm9tMetund1jaaMOiPKQz/a32b07a3fa75dd1a474fc117d44717a6/FC25_Accloades_4x3.png?im=AspectCrop%3D(4,3),xPosition%3D0.5,yPosition%3D0.5&q=40&w=2382');`);
  console.log("database created");
}

createDatabase();
