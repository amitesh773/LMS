# Library Management System (LMS)

A simple Library Management System built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **JWT Authentication**.

## Features

* User Registration
* User Login
* JWT Authentication
* Role-Based Authorization (Admin/User)
* Add New Books
* View All Books
* View Book by ID
* Update Book Details
* Delete Books
* Borrow Books
* Return Books
* Book Record Management
* MongoDB Database Integration

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Joi Validation
* dotenv

## Project Structure

```bash
LMS/
│
├── config/
│   └── dbConnection.js
│
├── controller/
│   ├── authController.js
│   ├── bookController.js
│   └── createBookRecord.js
│
├── middleware/
│   └── Authentication.js
│
├── models/
│   ├── user.js
│   ├── Book.js
│   └── BookRecord.js
│
├── router/
│   ├── authRouter.js
│   ├── bookRouter.js
│   └── borrowBookRouter.js
│
├── validations/
│   ├── userValidation.js
│   └── bookValidation.js
│
├── .env
├── app.js
├── package.json
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/amitesh773/LMS.git
```

### Navigate to Project

```bash
cd LMS
```

### Install Dependencies

```bash
npm install
```

### Run Project

```bash
npm start
```

or

```bash
nodemon app.js
```

## API Endpoints

### Authentication

| Method | Endpoint  | Description   |
| ------ | --------- | ------------- |
| POST   | /register | Register User |
| POST   | /login    | Login User    |

### Books

| Method | Endpoint   | Description    |
| ------ | ---------- | -------------- |
| POST   | /books     | Add Book       |
| GET    | /books     | Get All Books  |
| GET    | /books/:id | Get Book By ID |
| PUT    | /books/:id | Update Book    |
| DELETE | /books/:id | Delete Book    |

### Borrow Books

| Method | Endpoint    | Description |
| ------ | ----------- | ----------- |
| POST   | /borrow     | Borrow Book |
| PUT    | /return/:id | Return Book |

## Author

**Amitesh Yadav**

GitHub: https://github.com/amitesh773

## License

This project is open-source and available for learning and educational purposes.
