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

module.exports = { getGames, insertGame };
