# Task Manager MERN Backend

This is the backend part of the Task Manager application built using the MERN stack (MongoDB, Express, React, Node.js). 

## Features

- User Registration and Login
- Task Management (Create, Read, Update, Delete)
- JWT Authentication

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd task-manager-mern/backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

1. Start the MongoDB server.
2. Run the backend server:
   ```
   npm start
   ```

The server will run on `http://localhost:5000`.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login an existing user

### Tasks

- `POST /api/tasks` - Create a new task
- `GET /api/tasks` - Get all tasks
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## License

This project is licensed under the MIT License.