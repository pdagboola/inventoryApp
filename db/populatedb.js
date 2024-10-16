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
    name VARCHAR(255),
    genre_img_url VARCHAR(255)
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
    ('The Witcher 3: Wild Hunt', '2015-05-19', 9.5, 'https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3REDkit_CDPROJEKTRED_DLC_S2_1200x1600-ac50a0b326e409e8b2cbf03c0fa42094'),  
    ('The Legend of Zelda: Breath of the Wild', '2017-03-03', 10.0, 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg'),  
    ('Grand Theft Auto V', '2013-09-17', 9.7, 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png'),  
    ('Red Dead Redemption 2', '2018-10-26', 9.8, 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg'),  
    ('Cyberpunk 2077', '2020-12-10', 7.5, 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg'),  
    ('Minecraft', '2011-11-18', 9.0, 'https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png'),  
    ('Fortnite', '2017-07-25', 8.5, 'https://upload.wikimedia.org/wikipedia/en/a/ae/Fortnite_Save_The_World.jpg'),  
    ('Call of Duty: Warzone', '2020-03-10', 8.0, 'https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Call_of_Duty_Warzone_2.0_Cover.png/220px-Call_of_Duty_Warzone_2.0_Cover.png'),  
    ('FIFA 23', '2022-09-30', 8.5, 'https://upload.wikimedia.org/wikipedia/en/a/a6/FIFA_23_Cover.jpg'),  
    ('Overwatch 2', '2022-10-04', 8.0, 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000019691/8064964e14dc7b01110e674689ea88d23957c78f1a4d1e995a420f3a3813d5fe'),  
    ('League of Legends', '2009-10-27', 9.0, 'https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2021/09/league-of-legends.jpeg?fit=1607%2C895&ssl=1'),  
    ('Apex Legends', '2019-02-04', 8.5, 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/capsule_616x353.jpg?t=1727104892'),  
    ('Valorant', '2020-06-02', 8.5, 'https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg'),  
    ('Animal Crossing: New Horizons', '2020-03-20', 9.0, 'https://m.media-amazon.com/images/I/81UfEdvf2kL._AC_UF1000,1000_QL80_.jpg'),  
    ('Elden Ring', '2022-02-25', 9.7, 'https://storage.googleapis.com/pod_public/1300/216712.jpg'),  
    ('Among Us', '2018-06-15', 8.5, 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Among_Us_cover_art.jpg/220px-Among_Us_cover_art.jpg'),  
    ('Hades', '2020-09-17', 9.5, 'https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg'),  
    ('Super Mario Odyssey', '2017-10-27', 9.7, 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5'),  
    ('God of War (2018)', '2018-04-20', 9.8, 'https://i.ebayimg.com/images/g/OeQAAOSwtEJj-mIp/s-l1200.jpg'),  
    ('Assassin''s Creed Valhalla', '2020-11-10', 8.0, 'https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Portrait_640x854-640x854-288120c5573756cb988b6c1968cebd86.png')

;`);
  await pool.query(`INSERT INTO genre(name, genre_img_url)
VALUES 
    ('RPG', 'https://upload.wikimedia.org/wikipedia/en/5/5a/FF_XV_cover_art.jpg'), 
    ('Adventure', 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg'), 
    ('Action', 'https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg'), 
    ('Simulation', 'https://upload.wikimedia.org/wikipedia/en/7/7f/Sims4_Rebrand.png'), 
    ('Sports', 'https://upload.wikimedia.org/wikipedia/en/a/a6/FIFA_23_Cover.jpg'), 
    ('Strategy', 'https://upload.wikimedia.org/wikipedia/en/3/3b/Civilization_VI_cover_art.jpg'), 
    ('Battle Royale', 'https://wallpapers.com/images/featured/fortnite-pictures-b5kfcchwazwiz3cs.jpg'), 
    ('MOBA', 'https://www.losreplicantes.com/images/articulos/11000/11895/s3.jpg'), 
    ('Tactical Shooter', 'https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg'), 
    ('Hero Shooter', 'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg'), 
    ('Roguelike', 'https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg'), 
    ('Platformer', 'https://upload.wikimedia.org/wikipedia/en/0/03/New_Super_Mario_Bros._U_box_art.png'), 
    ('Sandbox', 'https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png'), 
    ('Social Deduction', 'https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg'), 
    ('Survival', 'https://pbs.twimg.com/media/GDo8tvwaoAAOvID.jpg'), 
    ('Racing', 'https://upload.wikimedia.org/wikipedia/en/7/7f/Cover_Art_of_Need_for_Speed_Heat.png'), 
    ('Fighting', 'https://upload.wikimedia.org/wikipedia/en/8/80/Street_Fighter_V_box_artwork.png'), 
    ('Puzzle', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Typical_Tetris_Game.svg/440px-Typical_Tetris_Game.svg.png'), 
    ('Horror', 'https://upload.wikimedia.org/wikipedia/en/a/a6/Resident_Evil_1_cover.png'), 
    ('Open World', 'https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3REDkit_CDPROJEKTRED_DLC_S2_1200x1600-ac50a0b326e409e8b2cbf03c0fa42094'), 
    ('Shooter', 'https://image.api.playstation.com/vulcan/ap/rnd/202312/0123/978efa66c9645e4692ac7036a31aa002a49d0efb4b88b45c.png');

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
