# User Management Dashboard

A simple web application for managing user details. This project allows users to view, add, edit, and delete user details by interacting with a mock backend API. The application is built with React, Vite, Tailwind CSS, and Axios and uses JSONPlaceholder as the mock backend API.

## Demo

Live demo: [User Management Dashboard](https://user-management-dashboard123.netlify.app/)

## Features

- **View Users**: Display a list of users with their details.
- **Add User**: Add a new user by filling out a form.
- **Edit User**: Update details of an existing user.
- **Delete User**: Remove a user from the list.
- **Toast Notifications**: Feedback messages for successful user actions (add, edit, delete).
- **Error Handling**: Displays error messages in case of failed API requests.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Frontend build tool for faster development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for API requests.
- **JSONPlaceholder**: Free online REST API for testing and prototyping.
- **React Toastify**: Toast notifications for React.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jayant753/User-Management-Dashboard.git

2. Navigate to the project directory:

   ```bash
   cd User-Management-Dashboard

3. Install the dependencies:

   ```bash
   npm install

4. Start the development server:

   ```bash
   npm run dev

5. Open the application in your browser:

   ```bash
   http://localhost:5173  


## API

This project uses the JSONPlaceholder API to simulate backend interactions for user data.

- **GET /users**: Fetches the list of users.
- **POST /users**: Adds a new user.
- **PUT /users/:id**: Updates an existing user.
- **DELETE /users/:id**: Deletes a user.

## Deployment

- This project is deployed on Netlify. You can view the live version here: [User Management Dashboard.](https://user-management-dashboard123.netlify.app/)


