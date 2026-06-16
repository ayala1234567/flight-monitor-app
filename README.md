# Flight Instruments Monitor 

A full-stack web application for monitoring and visually rendering flight data in real-time. 

## Author
**Ayala Biton** Email: ayalab2468@gmail.com

## Tech Stack
* **Frontend:** React, TypeScript, Vite, Axios
* **Backend:** Node.js, Express, TypeScript
* **Database:** MongoDB (Mongoose)

## Features
* **Data Entry (Dialog):** Secure client-side and server-side validation for entering flight parameters.
* **Text View:** Clear JSON/Text representation of the latest flight data.
* **Visual View:** Dynamic, CSS-based animated flight instruments (Altitude, HIS compass, and ADI horizon) that react to the data in real-time.

## How to Run the Project

### 1. Database Setup
Ensure you have MongoDB installed and running locally on the default port (`mongodb://127.0.0.1:27017`).

### 2. Server Setup (Backend)
Open a terminal and run the following commands:
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory and add the following:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/flight-monitor
```
Start the server:
```bash
npm run dev
```

### 3. Client Setup (Frontend)
Open a new terminal and run:
```bash
cd client
npm install
npm run dev
```
The application will be available at `http://localhost:5173`.
