# Node.js Authentication System

A beginner-friendly authentication system built using **Node.js, Express.js, bcrypt, and JSON Web Tokens (JWT)**.

This project was created to understand how authentication works practically in a backend application, starting from user registration and login to JWT-based protected routes.

## 🚀 Features

* User Registration
* Password Hashing using bcrypt
* User Login
* Password Verification using `bcrypt.compare()`
* JWT Token Generation
* JWT Token Verification
* Authentication Middleware
* Protected Routes
* `req.user` for authenticated user information
* JWT Token Expiration
* Basic Logout Concept
* In-memory user storage for learning purposes

## 🛠️ Technologies Used

* Node.js
* Express.js
* bcrypt
* JSON Web Token (JWT)
* JavaScript
* Postman

## 📁 Project Structure

```text
authentication-demo/
│
├── controllers/
├── models/
├── routes/
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

> The project is currently being developed step by step. MVC architecture will be implemented as the next stage of the project.

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/singhvikas76/nodejs-authentication-demo.git
```

Go into the project folder:

```bash
cd nodejs-authentication-demo
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The server will run on:

```text
http://localhost:5000
```

## 🔐 Authentication Flow

### 1. Register

```text
Client
  ↓
POST /api/register
  ↓
Receive user data
  ↓
Hash password using bcrypt
  ↓
Store user
  ↓
Send response
```

### 2. Login

```text
Client
  ↓
POST /api/login
  ↓
Find user by email
  ↓
Compare password using bcrypt
  ↓
Generate JWT
  ↓
Send token
```

### 3. Protected Route

```text
Client
  ↓
Send JWT in Authorization header
  ↓
Authentication Middleware
  ↓
jwt.verify()
  ↓
req.user
  ↓
Protected Route
  ↓
Response
```

## 📌 API Endpoints

| Method | Endpoint        | Description                     |
| ------ | --------------- | ------------------------------- |
| GET    | `/`             | Check whether server is running |
| POST   | `/api/register` | Register a new user             |
| POST   | `/api/login`    | Login and receive JWT           |
| GET    | `/api/profile`  | Access protected profile        |
| POST   | `/api/logout`   | Basic logout response           |

## 📝 Register Request

**POST**

```text
/api/register
```

JSON body:

```json
{
  "name": "Vikas",
  "email": "vikas@gmail.com",
  "password": "123456"
}
```

## 🔑 Login Request

**POST**

```text
/api/login
```

JSON body:

```json
{
  "email": "vikas@gmail.com",
  "password": "123456"
}
```

The response contains a JWT token.

## 🔒 Accessing Protected Route

**GET**

```text
/api/profile
```

Add the following HTTP header:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

The middleware verifies the token before allowing access to the protected route.

## ⚠️ Current Limitations

This project is currently intended for **learning and practice**.

* User data is stored in an in-memory array.
* Data will be lost whenever the server restarts.
* JWT secret is currently stored directly in the code.
* No real database is connected yet.
* Production-level token revocation is not implemented.
* Input validation and advanced error handling will be added later.

## 🎯 Learning Goals

The main goal of this project is to understand backend authentication concepts practically:

* How registration works
* Why passwords are hashed
* How bcrypt verifies passwords
* How JWT authentication works
* How middleware protects routes
* How `req.user` carries authenticated user information
* How token expiration works
* How authentication can later be organized using MVC

## 🔮 Next Step

The next stage of this project is to convert the authentication system into a proper **MVC architecture** with:

```text
Routes
   ↓
Controllers
   ↓
Models
   ↓
Middleware
```

Later, the in-memory storage can also be replaced with a real database.

## 👨‍💻 Author

**Vikas Singh**
