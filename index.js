import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

db.connect((err)=>{
  if(err){
    console.log("Connection error", err.stack);
  } else {
    console.log("Connected to the database");
  }
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const result = await db.query(
  "SELECT country_code FROM visited_countries"
);
  let countries = [];
  result.rows.forEach((country) =>{
    countries.push(country.country_code);
  });
  res.render("index.ejs", {
    countries: countries,
    total: countries.length
  });

});

app.post("/add", async (req, res)=>{
  const countryName = req.body.country;
  const nation = await db.query(
    "SELECT country_code FROM countries WHERE LOWER(country_name) = $1", [countryName.toLowerCase()]
  );
  if(nation.rows.length > 0){
    const countryCode = nation.rows[0].country_code;
    await db.query(
      "INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode]
    );
    
  } 

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
