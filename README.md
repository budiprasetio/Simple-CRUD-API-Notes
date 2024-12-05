## Simple CRUD API Notes (BackEnd Only) by Budi Prasetio
This is a web application project built with Node.js and Express.js. It provides a basic structure for managing notes, allowing users to add, update, retrieve, and delete notes from a database.

## Installation

To install the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/WEB-TASK.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd WEB-TASK
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Set up environment variables: Create a .env file in the root directory of the project and add your environment variables, such as the port and database configurations. Here's an example of what it should contain**:
   ```bash
   APP_PORT= 3000
   DB_HOST= localhost
   DB_USER= username
   DB_PASSWORD= password
   DB_NAME= webtask
   ```
5. **Start The Server**:
   ```bash
   npm start
   ```
---
## API Endpoints
The app provides the following endpoints for managing notes:

1. **Get all notes**
URL: /notes
Method: GET
Description: Retrieve a list of all notes.

2. **Add a new note**
URL: /notes
Method: POST
Body:
```bash
{
  "title": "Note Title",
  "note": "Note Content"
}
```

3. **Update a new note**
URL: /notes:id
Method: PUT
Body:
```bash
{
  "title": "Note Title",
  "note": "Note Content"
}
```
4. **Delete a new note**
URL: /notes:id
Method: DELETE
Body:
```bash
{
  "title": "Note Title",
  "note": "Note Content"
}
```
---

## Technologies Used

Node.js: JavaScript runtime for building server-side applications.
Express.js: Web framework for Node.js to handle routing and middleware.
dotenv: Load environment variables from a .env file.
cors: Enable Cross-Origin Resource Sharing (CORS) for the API

---

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, create a new branch, make your changes, and submit a pull request. Contributions are always welcome!
