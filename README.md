# Always Music - Student Management System

This project is a simple Node.js application that interacts with a PostgreSQL database to manage student records for a music school. It includes functionalities to add, retrieve, update, and delete student records using asynchronous functions.

## Prerequisites

- Node.js installed on your machine
- PostgreSQL installed and running
- A PostgreSQL database and table created for storing student data

## Installation

1. Clone the repository to your local machine:

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Set up your environment variables. Create a `.env` file in the root directory of your project and add the following variables of the `.env.example` file

4. Create the PostgreSQL database and table. You can use the following SQL script to create the table:

    ```sql
    CREATE DATABASE always_music;

    \c always_music

    CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(50),
        rut VARCHAR(10) UNIQUE,
        curso VARCHAR(50),
        nivel VARCHAR(20)
    );
    ```

## Usage

1. Run the application:

    ```bash
    node index.js
    ```

## Functions

- `addStudent(name, rut, course, level)`: Adds a new student to the database.
- `getStudentByRut(rut)`: Retrieves a student by their `rut`.
- `getAllStudents()`: Retrieves all students from the database.
- `updateStudent(rut, name, course, level)`: Updates the details of a student identified by their `rut`.
- `deleteStudent(rut)`: Deletes a student from the database identified by their `rut`.

