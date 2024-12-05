const mysql2 = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql2.createPool({
  host: process.env.APP_HOST,
  user: process.env.APP_USER,
  password: process.env.APP_PASSWORD,
  database: process.env.APP_DATABASE,
});

async function testConnection() {
  try {
    await db.getConnection();
    console.log("Connection DATABASE has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

async function query(command, values) {
  try {
    const [value] = await db.query(command, values ?? []);
    return value;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { query, testConnection };
