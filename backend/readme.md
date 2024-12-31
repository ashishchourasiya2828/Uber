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

### Captain Registration
- **Endpoint**: `POST /captains/register`
- **Description**: Allows a new captain to register by providing their email, full name, password, and vehicle details. A JSON Web Token (JWT) is generated upon successful registration.

#### Required Data
The request body must be in JSON format and include the following fields:
- **email**: (string, required) The captain's email address. Must be a valid email format and unique.
- **fullname**: (object, required) The captain's full name.
  - **firstname**: (string, required) The captain's first name. Must be at least 3 characters long.
  - **lastname**: (string, optional) The captain's last name. Must be at least 3 characters long.
- **password**: (string, required) The captain's password. Must be at least 6 characters long.
- **vehicle**: (object, required) The captain's vehicle details.
  - **color**: (string, required) The color of the vehicle. Must be at least 3 characters long.
  - **plate**: (string, required) The vehicle's plate number. Must be at least 3 characters long.
  - **capacity**: (number, required) The vehicle's capacity. Must be at least 1.
  - **vehicleType**: (string, required) The type of vehicle. Must be one of the following: `car`, `motorcycle`, `auto`.

#### Example Request Body
```json
{
    "email": "captain@example.com",
    "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
    },
    "password": "securepassword",
    "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
    }
}
```

#### Responses
- **Success Response**:
  - **Status Code**: `201 Created`
  - **Response Body**:
  ```json
  {
      "captain": {
          "fullname": {
              "firstname": "Jane",
              "lastname": "Doe"
          },
          "email": "captain@example.com",
          "vehicle": {
              "color": "red",
              "plate": "ABC123",
              "capacity": 4,
              "vehicleType": "car"
          },
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
                "msg": "Invalid email",
                "param": "email",
                "location": "body"
            },
            {
                "msg": "First name must be 3 character long",
                "param": "fullname.firstname",
                "location": "body"
            },
            {
                "msg": "Password must be at least 6 characters",
                "param": "password",
                "location": "body"
            },
            {
                "msg": "Color must be at least 3 characters",
                "param": "vehicle.color",
                "location": "body"
            },
            {
                "msg": "Plate must be at least 3 characters",
                "param": "vehicle.plate",
                "location": "body"
            },
            {
                "msg": "Capacity must be at least 1",
                "param": "vehicle.capacity",
                "location": "body"
            },
            {
                "msg": "Invalid vehicle type",
                "param": "vehicle.vehicleType",
                "location": "body"
            }
        ]
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