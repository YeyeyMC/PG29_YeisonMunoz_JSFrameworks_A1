# PG29_YeisonMunoz_WebAppFrameworks_A2

This project is a fullstack web application with
- Frontend: Vue, Pinia
- Backend: Node.js, Express
- Databases:
  - MySQL (Leaderboard data)
  - MongoDB (Users + Contact Messages) 

## Application Features
- User login using credentials stored in MongoDB
- Route protection using beforeEach and meta.requiresAuth
- Logged in user is stored in a Pinia store
- User state persists across views
- Leaderboard data is fetched from MySQL
- Data is retrieved through /api/leaderboard.
- Pinia store manages:
  - state
  - getters (sorted leaderboard)
  - actions (fetchLeaderboard)
Sorting options:
  - Score (High -> Low)
  - Score (Low -> High)
  - Name (A -> Z)
  - Name (Z -> A)
- Refresh button re fetches live database data
-   Contact form sends POST request to /api/contacts
-   Messages are stored in MongoDB

## How to Run the Project

1. Clone the repository from GitHub  
2. Backend Setup
   - npm install
   - npm run dev
3. Frontend Setup
   - npm install
   - npm run dev

## API EndPoints
MySQL
- GET /api/leaderboard (Returns leaderboard from MySQL)

MongoDB
- GET /api/login (Authenticates a user)
- POST /api/contacts (Saves a contact message to MongoDB)

## Author
Yeison Munoz  
Vancouver Film School  
Web App Frameworks - 2026
