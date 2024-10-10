const pool = require("./pool");

async function createDatabase() {
  console.log("creating database...");
  await pool.query(`DROP TABLE IF EXISTS game_genre;`);
  await pool.query(`DROP TABLE IF EXISTS game_developer`);
  await pool.query(`DROP TABLE IF EXISTS games;`);
  await pool.query(`DROP TABLE IF EXISTS genre;`);
  await pool.query(`DROP TABLE IF EXISTS developer;`);

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
    ('The Witcher 3: Wild Hunt', '2015-05-19', 9.5, 'https://cdn-s-thewitcher.cdprojektred.com/witcher3/backgrounds/TW3NG_DLCs_PC_Geralt_Netflix_Armor_RGB-en@2x.jpg'),  
    ('The Legend of Zelda: Breath of the Wild', '2017-03-03', 10.0, 'https://assets.nintendo.com/image/upload/f_auto/q_auto/c_pad,w_600,h_600/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero'),  
    ('Grand Theft Auto V', '2013-09-17', 9.7, 'https://www.rockstargames.com/games/V/launch/launch_1.jpg'),  
    ('Red Dead Redemption 2', '2018-10-26', 9.8, 'https://www.rockstargames.com/games/reddeadredemption2/img/launch/launch_1.jpg'),  
    ('Cyberpunk 2077', '2020-12-10', 7.5, 'https://cdn.cloudflare.steamstatic.com/steam/apps/109150/ss_4b150a761ecad5aa264c2600031e26406e09b720.1920x1080.jpg?t=1693840424'),  
    ('Minecraft', '2011-11-18', 9.0, 'https://www.minecraft.net/content/dam/games/minecraft/featured/img/heroes/minecraft/screens/mc_hero_header_900x500.png'),  
    ('Fortnite', '2017-07-25', 8.5, 'https://cdn.epicgames.com/fortnite/en-US/fortnite/epicgames.com/homepage/hero-desktop-v2.jpg'),  
    ('Call of Duty: Warzone', '2020-03-10', 8.0, 'https://www.callofduty.com/content/dam/atvi/callofduty/warzone/home/hero/warzone-home-hero-desktop.jpg'),  
    ('FIFA 23', '2022-09-30', 8.5, 'https://www.ea.com/games/fifa/fifa-23/images/fifa-23-key-art.jpg'),  
    ('Overwatch 2', '2022-10-04', 8.0, 'https://media.blizzard.com/overwatch/cms/overwatch2/hero-overwatch2.jpg'),  
    ('League of Legends', '2009-10-27', 9.0, 'https://www.leagueoflegends.com/media/leagueoflegends/images/homepage/landing/2023/09/rerun_riot.jpg'),  
    ('Apex Legends', '2019-02-04', 8.5, 'https://www.ea.com/games/apex-legends/images/apex-legends-key-art.jpg'),  
    ('Valorant', '2020-06-02', 8.5, 'https://playvalorant.com/assets/images/landing/hero.jpg'),  
    ('Animal Crossing: New Horizons', '2020-03-20', 9.0, 'https://www.nintendo.com/content/dam/noa/en_US/games/switch/a/animal-crossing-new-horizons/animal-crossing-new-horizons-hero.jpg'),  
    ('Elden Ring', '2022-02-25', 9.7, 'https://www.bandainamcoent.com/sites/default/files/2022-02/elden-ring-key-art.jpg'),  
    ('Among Us', '2018-06-15', 8.5, 'https://www.innersloth.com/wp-content/uploads/2020/12/Among-Us-Promo.jpg'),  
    ('Hades', '2020-09-17', 9.5, 'https://www.supergiantgames.com/images/games/hades/hades-keyart.jpg'),  
    ('Super Mario Odyssey', '2017-10-27', 9.7, 'https://www.nintendo.com/content/dam/noa/en_US/games/switch/s/super-mario-odyssey/super-mario-odyssey-hero.jpg'),  
    ('God of War (2018)', '2018-04-20', 9.8, 'https://www.playstation.com/content/dam/pscom/en_US/games/god-of-war/god-of-war-goty-keyart.jpg'),  
    ('Assassin''s Creed Valhalla', '2020-11-10', 8.0, 'https://www.ubisoft.com/taxonomy/term/1152?file=ACValhalla-1.jpg')

;`);
  await pool.query(`INSERT INTO genre(name)
    VALUES 
    ('RPG'),
    ('Adventure'),
    ('Action'),
    ('Simulation'),
    ('Sports'),
    ('Strategy'),
    ('Battle Royale'),
    ('MOBA'),
    ('Tactical Shooter'),
    ('Hero Shooter'),
    ('Roguelike'),
    ('Platformer'),
    ('Sandbox'),
    ('Social Deduction'),
    ('Survival'),
    ('Racing'),
    ('Fighting'),
    ('Puzzle'),
    ('Horror'),
    ('Open World'),
    ('Shooter')
    `);
  await pool.query(`INSERT INTO game_genre(games_id, genre_id)
    VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (3, 2),
    (4, 3),
    (4, 2),
    (5, 1),
    (6, 13),
    (6, 15),
    (7, 7),
    (8, 7),
    (8, 21),
    (9, 5),
    (10, 10),
    (11, 8),
    (12, 7),
    (12, 21),
    (13, 9),
    (14, 4),
    (15, 1),
    (15, 3),
    (16, 14),
    (17, 11),
    (18, 12),
    (19, 2),
    (19, 3),
    (20, 2),
    (20, 3)
    `);
  console.log("database created");
}

createDatabase();
