const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

/* Database */

const db = new sqlite3.Database("./registrations.db");

db.run(`
CREATE TABLE IF NOT EXISTS registrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT
)
`);

/* Get Registered Count */

app.get("/count", (req, res) => {

  db.get(
    "SELECT COUNT(*) as count FROM registrations",
    (err, row) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        count: row.count
      });

    }
  );

});

/* Webhook Endpoint */

app.post("/webhook", (req, res) => {

  console.log("Webhook received");

  // For now, add registration
  db.run(
    "INSERT INTO registrations DEFAULT VALUES"
  );

  res.sendStatus(200);

});

/* Start Server */

app.listen(5000, () => {

  console.log("Server running on port 5000");

});