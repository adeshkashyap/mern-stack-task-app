# Task Manager MERN Stack

This is a task management system built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to register, log in, and manage their tasks effectively.

## Features

- User Registration: Users can create an account to manage their tasks.
- User Login: Users can log in to access their tasks.
- Task Management: Users can create, update, edit, and delete tasks.
- User Authentication: Secure authentication using JWT tokens.

## Project Structure

```
task-manager-mern
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middleware
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd task-manager-mern/backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd task-manager-mern/backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd task-manager-mern/frontend
   npm start
   ```

### API Endpoints

- **Authentication**
  - POST `/api/auth/register`: Register a new user
  - POST `/api/auth/login`: Log in an existing user

- **Tasks**
  - POST `/api/tasks`: Create a new task
  - PUT `/api/tasks/:id`: Update an existing task
  - PATCH `/api/tasks/:id`: Edit an existing task
  - DELETE `/api/tasks/:id`: Delete a task

## License

This project is licensed under the MIT License.