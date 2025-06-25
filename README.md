# Task Management System

This is a task management system built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to register, log in, and manage tasks effectively.

## Features

- User Registration: Users can create an account to access the application.
- User Login: Users can log in to their accounts.
- Task Management: Users can create, update, edit, and delete tasks.
- Authentication: Secure routes using JWT for user authentication.

## Project Structure

task-manager-mern
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   ├── authController.js
│   │   │   └── taskController.js
│   │   ├── models
│   │   │   ├── Task.js
│   │   │   └── User.js
│   │   ├── routes
│   │   │   ├── authRoutes.js
│   │   │   └── taskRoutes.js
│   │   ├── middleware
│   │   │   └── authMiddleware.js
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Auth
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   ├── Tasks
│   │   │   │   ├── TaskList.jsx
│   │   │   │   ├── TaskForm.jsx
│   │   │   │   └── TaskItem.jsx
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
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
   cd backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

### API Endpoints

- **Authentication**
  - POST `/api/auth/register` - Register a new user
  - POST `/api/auth/login` - Log in a user

- **Tasks**
  - GET `/api/tasks` - Get all tasks
  - POST `/api/tasks` - Create a new task
  - PUT `/api/tasks/:id` - Update a task
  - DELETE `/api/tasks/:id` - Delete a task

## License

This project is licensed under the MIT License.
