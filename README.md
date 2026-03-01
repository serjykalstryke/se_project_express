# WTWR Backend

This project is the back-end server for the WTWR (What to Wear?) application. It provides a REST API for working with users and clothing items, including creating and retrieving users, creating and managing clothing items, and liking or unliking items. The server uses MongoDB for data storage and Mongoose for schema validation and database interaction.

## Functionality

This server currently supports:

- Creating users
- Getting all users
- Getting a user by ID
- Creating clothing items
- Getting all clothing items
- Getting a clothing item by ID
- Deleting clothing items
- Liking clothing items
- Unliking clothing items
- Returning appropriate error codes and JSON error messages for invalid data, invalid IDs, missing resources, and server errors

## Technologies and Techniques Used

- **Node.js** — JavaScript runtime for the backend
- **Express** — server framework for routing and handling HTTP requests
- **MongoDB** — NoSQL database for storing users and clothing items
- **Mongoose** — ODM for defining schemas, validation rules, and database queries
- **ESLint** — code linting with Airbnb base style guide and project-specific rule configuration
- **Nodemon** — automatic server restart during development
- **REST API** design
- **Schema validation** using Mongoose validators
- **Custom error handling** with centralized HTTP status code constants
- **Route controllers** for separating routing logic from business logic

## Running the Project

`npm run start` — launch the server

`npm run dev` — launch the server with hot reload

## Testing

Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For example: `12`
