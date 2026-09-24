# Uber Clone

A full-stack ride-hailing application inspired by Uber, built with the MERN stack. The project includes separate user and captain flows, ride booking, location suggestions, fare estimation, and real-time socket-based updates.

## Features

- User signup/login/logout
- Captain signup/login/logout
- Ride creation and fare estimate
- Live map/location suggestions
- Driver tracking and ride status flow
- Real-time updates with Socket.IO
- JWT-based authentication
- Responsive UI for rider and captain perspectives

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- GSAP
- Socket.IO Client

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT
- Cookie Parser
- Socket.IO
- Google Maps API integration

## Project Structure

```text
uberclone/
├── backend/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── Models/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   ├── server.js
│   ├── Socket.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── README.md
└── package.json (if added at root later)
```

## Prerequisites

Before running the app, make sure you have:

- Node.js 18+ installed
- MongoDB running locally or a MongoDB Atlas connection string
- A Google Maps API key

## Environment Variables

Create a `.env` file inside the `backend` folder with the following values:

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_MAPS_API=your_google_maps_api_key
```

## Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd uberclone
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

## Run the App

### Start the backend

```bash
cd backend
npm run dev
```

The backend server runs by default on:

```text
http://localhost:3000
```

### Start the frontend

```bash
cd frontend
npm run dev
```

The frontend runs by default on:

```text
http://localhost:5173
```

## Main API Endpoints

### User routes
- `POST /users/register`
- `POST /users/login`
- `GET /users/profile`
- `GET /users/logout`

### Captain routes
- `POST /captains/register`
- `POST /captains/login`
- `GET /captains/profile`
- `GET /captains/logout`

### Maps routes
- `GET /maps/get-coordinates`
- `GET /maps/get-distance-time`
- `GET /maps/get-suggestions`

### Ride routes
- `POST /rides/create`
- `GET /rides/get-fare`

## User Flow

1. User signs up or logs in.
2. User enters pickup and destination.
3. Fare is estimated and vehicle options appear.
4. User confirms the ride request.
5. A captain accepts the ride.
6. Ride status is updated in real time until completion.

## Captain Flow

1. Captain signs up or logs in.
2. Driver becomes active for incoming ride requests.
3. Captain accepts a nearby ride.
4. Captain navigates to the pickup and destination.
5. Ride status is updated as the trip progresses.

## Notes

- The backend supports both rider and captain authentication.
- Location and map-related features rely on Google Maps APIs, with fallback values used if the API is unavailable.
- Socket.IO enables real-time communication between the server and the frontend.

## License

This project is for learning and development purposes.

---

Built as a full-stack MERN project for practicing authentication, APIs, real-time communication, and ride-booking workflows.
