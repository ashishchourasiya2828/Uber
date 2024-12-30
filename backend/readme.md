# Backend API Documentation

## Overview
This is the backend API for the user management system. It is built using Node.js, Express, and MongoDB. The API provides endpoints for user registration, authentication, and management.

## Endpoints

### User Registration
- **Endpoint**: `POST /users/register`
- **Description**: Allows a new user to register by providing their email, full name, and password. A JSON Web Token (JWT) is generated upon successful registration.
  
#### Required Data
The request body must be in JSON format and include the following fields:
- **email**: (string, required) The user's email address. Must be a valid email format and unique.
- **fullname**: (object, required) The user's full name.
  - **firstname**: (string, required) The user's first name. Must be at least 3 characters long.
  - **lastname**: (string, optional) The user's last name. Must be at least 3 characters long.
- **password**: (string, required) The user's password. Must be at least 6 characters long.

#### Example Request Body
```json
{
    "email": "user@example.com",
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "password": "securepassword"
}
```

#### Responses
- **Success Response**:
  - **Status Code**: `201 Created`
  - **Response Body**:
  ```json
  {
      "user": {
          "fullname": {
              "firstname": "John",
              "lastname": "Doe"
          },
          "email": "user@example.com",
          "socketId": null // or the assigned socketId if applicable
      },
      "token": "your_jwt_token_here"
  }
  ```

- **Error Responses**:
  - **Status Code**: `400 Bad Request`
    - **Response Body**:
    ```json
    {
        "errors": [
            {
                "msg": "invalid email",
                "param": "email",
                "location": "body"
            },
            {
                "msg": "first name must be 3 character long",
                "param": "fullname.firstname",
                "location": "body"
            },
            {
                "msg": "password must be at least 6 characters",
                "param": "password",
                "location": "body"
            }
        ]
    }
    ```

### User Login
- **Endpoint**: `POST /users/login`
- **Description**: Allows an existing user to log in by providing their email and password. A JSON Web Token (JWT) is generated upon successful login.

#### Required Data
The request body must be in JSON format and include the following fields:
- **email**: (string, required) The user's email address. Must be a valid email format.
- **password**: (string, required) The user's password.

#### Example Request Body
```json
{
    "email": "user@example.com",
    "password": "securepassword"
}
```

#### Responses
- **Success Response**:
  - **Status Code**: `200 OK`
  - **Response Body**:
  ```json
  {
      "user": {
          "fullname": {
              "firstname": "John",
              "lastname": "Doe"
          },
          "email": "user@example.com",
          "socketId": null // or the assigned socketId if applicable
      },
      "token": "your_jwt_token_here"
  }
  ```

- **Error Responses**:
  - **Status Code**: `400 Bad Request`
    - **Response Body**:
    ```json
    {
        "errors": [
            {
                "msg": "invalid email",
                "param": "email",
                "location": "body"
            },
            {
                "msg": "password must be at least 6 characters",
                "param": "password",
                "location": "body"
            }
        ]
    }
    ```

  - **Status Code**: `401 Unauthorized`
    - **Response Body**:
    ```json
    {
        "message": "Invalid email or password"
    }
    ```

### User Profile
- **Endpoint**: `GET /users/profile`
- **Description**: Retrieves the profile information of the currently authenticated user. The user must be logged in and provide a valid JWT in the request.

#### Responses
- **Success Response**:
  - **Status Code**: `200 OK`
  - **Response Body**:
  ```json
  {
      "fullname": {
          "firstname": "John",
          "lastname": "Doe"
      },
      "email": "user@example.com",
      "socketId": null // or the assigned socketId if applicable
  }
  ```

- **Error Responses**:
  - **Status Code**: `401 Unauthorized`
    - **Response Body**:
    ```json
    {
        "message": "Unauthorized access"
    }
    ```

### User Logout
- **Endpoint**: `GET /users/logout`
- **Description**: Logs out the currently authenticated user by invalidating their JWT and clearing the cookie.

#### Responses
- **Success Response**:
  - **Status Code**: `200 OK`
  - **Response Body**:
  ```json
  {
      "message": "logout user"
  }
  ```

## Setup Instructions
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```
   JWT_SECRET=your_jwt_secret
   MONGODB_URI=your_mongodb_uri
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Notes
- Ensure that the email provided during registration is unique and not already registered in the system.
- Passwords are hashed before being stored in the database for security purposes.