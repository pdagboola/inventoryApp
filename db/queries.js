const pool = require("./pool");

async function getGames() {
  //   const checkIfTableExists = async () => {
  //     const tableExistsQuery = `
  //     SELECT EXISTS (
  //       SELECT 1
  //       FROM   pg_tables
  //       WHERE  tablename = 'games'
  //     );
  //   `;
  //     const result = await pool.query(tableExistsQuery);
  //     const { rows } = await pool.query("SELECT * FROM games");
  //     // if (result.rows[0].exists) {
  //     //   console.log(rows);
  //     //   return rows;
  //     // }
  //     return rows;
  //   };
  //   await checkIfTableExists();
  //   checkIfTableExists()
  //     .then((rows) => {
  //       if (rows.length > 0) {
  //         console.log("Result here:", rows);
  //         return rows;
  //       } else {
  //         console.log("Table doesn't exist or no data found");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("Couldn't fetch data", err);
  //     });
  try {
    const { rows } = await pool.query("SELECT * FROM games");
    console.log(rows);
    return rows;
  } catch (err) {
    console.log("Could not fetch games:", err);
    throw err;
  }
}

async function insertGame(title, release_date, rating, img_url) {
  await pool.query(
    `INSERT INTO games(title, release_date, rating, img_url) 
        VALUES
        ($1, $2, $3, $4)  
        ;`,
    [title, release_date, rating, img_url]
  );
}

async function viewGenre(genre) {
  const { rows } = await pool.query(
    `SELECT * FROM games 
    JOIN game_genre ON games.id = game_genre.games_id 
    JOIN genre ON genre.id = game_genre.genre_id
    WHERE name ILIKE $1 `,
    [genre]
  );
  return rows;
}

async function viewDeveloper(developer) {
  const { rows } = await pool.query(
    `SELECT * FROM games 
    JOIN game_developer ON games.id = game_developer.games_id 
    JOIN genre ON developer.id = game_developer.developer_id
    WHERE name ILIKE $1 `,
    [developer]
  );
  return rows;
}

async function updateGame(id, title, release_date, rating) {
  await pool.query(
    `UPDATE games
    SET title = $1,
        release_date = $2,
        rating = $3
    WHERE id = $4 
    ;`,
    [title, release_date, rating, id]
  );
}

async function deleteGameFunction(title) {
  await pool.query(
    `DELETE FROM games 
    WHERE title ILIKE $1
    ;`,
    [title]
  );
}

async function getGame(title) {
  const { rows } = await pool.query(
    `SELECT * FROM games WHERE title ILIKE $1
    ;`,
    [title]
  );
  return rows;
}

async function allGenres() {
  const { rows } = await pool.query(
    `SELECT * FROM genre 
    `
  );
  return rows;
}

module.exports = {
  getGames,
  insertGame,
  viewGenre,
  viewDeveloper,
  updateGame,
  deleteGameFunction,
  getGame,
  allGenres,
};
