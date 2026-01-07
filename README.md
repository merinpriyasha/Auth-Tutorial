# Advanced Authentication System - Node.js & Express

This project implements a secure and advanced authentication system using Node.js, Express, MongoDB, JWT, bcrypt, and Mailtrap for email notifications. It provides full functionality for user registration, email verification, login, logout, password reset, and authentication checking.

## 📌 Features

* User registration with email, password, and name.
* Email verification with a 6-digit code (expires in 24 hours).
* Login using email and password.
* JWT authentication with cookie storage.
* Password hashing using bcrypt for secure storage.
* Forgot password flow with password reset link (expires in 1 hour).
* Logout functionality by clearing the token cookie.
* Email notifications:
  * Verification email
  * Welcome email after verification
  * Password reset request email
  * Password reset success email
* Authentication middleware to protect routes.

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB / Mongoose
* JWT (JSON Web Tokens)
* bcryptjs (password hashing)
* Mailtrap (email testing)

## 💻 Setup & Installation

1. Clone the repository:
   ```
   git clone https://github.com/merinpriyasha/Auth-Tutorial.git
   cd Auth-Tutorial
   ```
   
2. Install dependencies:
   ```
   npm install
   ```
   
3. Create a .env file in the root directory with the following environment variables (see below).
   ```
   MONGO_URI=<MongoDB URI>
  PORT=5000
  JWT_SECRET=<Secret key for signing JWT tokens>
  NODE_ENV=<development or production>
  MAILTRAP_TOKEN=<Mailtrap API token for sending emails>
  CLIENT_URL=<Frontend URL>

5. Start the development server:
   ```
   npm run dev
   ```
## live web app link
https://mern-advanced-auth-mi0h.onrender.com
