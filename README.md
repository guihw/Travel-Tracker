# 🌍 Travel Tracker

A web application that lets users visually track the countries they've visited by highlighting them on a world map. Built with Node.js, Express, PostgreSQL, and EJS.

## ✨ Features

- Search bar to input country names
- "Add" button to register a visited country
- Countries you've visited are highlighted in **teal**
- Data is stored persistently in a PostgreSQL database
- Uses EJS for rendering views
- Environment variables managed securely with `dotenv`

## 📷 Video Demo

https://github.com/user-attachments/assets/438f5e73-f083-4027-9e18-62f5a6974e0d



https://github.com/user-attachments/assets/c6758f12-5097-4825-8cc0-e851904691d8


## Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** EJS, HTML, CSS, JavaScript
- **Database:** PostgreSQL
- **Environment Variables:** dotenv

## Getting Started

```bash
1. Clone the repository
git clone https://github.com/yourusername/travel-tracker.git
cd travel-tracker

2. Install dependencies
npm install

3. Set up environment variables
Create a .env file in the root directory based on the provided .env_SAMPLE file

Fill in your PostgreSQL database credentials in the .env file.

4. Create the database
Ensure PostgreSQL is running and create the database specified in your .env file.
You may also need to run a script to create the necessary table(s).

5. Start the application
[Optional] Install nodemon: npm i nodemon
with your project path on the terminal, run: nodemon index.js or node index.js
The app will be available at http://localhost:3000 ´´´

📂 Project Structure
travel-tracker/
├── public/             # Static files (CSS, images, etc.)
├── views/              # EJS templates
├── .env_SAMPLE         # Sample environment variables
├── index.js            # Main Express app
├── db/                 # DB connection logic

