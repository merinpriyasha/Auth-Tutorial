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
  C LIENT_URL=<Frontend URL>
  ```

5. Start the development server:
   ```
   npm run dev

### 🖼 Screenshots

<p><b>Signup Page</b> </p><img width="700" height="500" alt="signup page" src="https://github.com/user-attachments/assets/89e3ba03-85dc-4bf6-b542-15aeeea00d42" />

<p><b>Login Page</b> </p><img width="700" height="500" alt="login" src="https://github.com/user-attachments/assets/96dfdffe-d5ae-48d3-94aa-04f7835c35d4" />

<p><b>Verify Email</b></p><img width="700" height="500" alt="verify-email" src="https://github.com/user-attachments/assets/75a4801f-d38f-4a9a-9d24-47b4a48fcdf9" />
<br>
<p><b>Verify Email with 6 digits</b></p><img width="700" height="500" alt="verify-email-digits" src="https://github.com/user-attachments/assets/d441c3e4-c134-4280-8aea-e85fc758254f" />
<br>
<p><b>Forget Password</b></p><img width="700" height="500" alt="forget password popup" src="https://github.com/user-attachments/assets/6e8447b5-0ae7-4501-9950-398ecf49475a" />
<br>
<p><b>reset passwrod email</b></p><img width="700" height="500" alt="reset password mail" src="https://github.com/user-attachments/assets/90d60ddd-fef9-4a0c-9485-b0786ce4c72e" />
<br>
<p><b>Reset password Page</b></p><img width="700" height="500" alt="reset passwrod page" src="https://github.com/user-attachments/assets/2a244689-fb5e-4656-a3c7-288ce2291c2c" />
<br>
<p><b>Reset Succefuly email</b></p><img width="700" height="500" alt="reset succefull email" src="https://github.com/user-attachments/assets/71bfec6f-f100-4308-b1a9-f30f6ae5d1e5" />



## live web app link
https://mern-advanced-auth-mi0h.onrender.com
