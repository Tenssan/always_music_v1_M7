const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    database: process.env.DB_NAME,
    password: process.env.PASSWORD_DB,
    port: process.env.DB_PORT,
});

client.connect();

// Function to add a new student
async function addStudent(nombre, rut, curso, nivel) {
    const query = 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [nombre, rut, curso, nivel];
    try {
        const res = await client.query(query, values);
        console.log('Student added:', res.rows[0]);
    } catch (err) {
        console.error('Error adding student:', err);
    }
}

// Function to get a student by rut
async function getStudentByRut(rut) {
    const query = 'SELECT * FROM estudiantes WHERE rut = $1';
    const values = [rut];
    try {
        const res = await client.query(query, values);
        console.log('Student:', res.rows[0]);
    } catch (err) {
        console.error('Error getting student by rut:', err);
    }
}

// Function to get all estudiantes
async function getStudents() {
    const query = 'SELECT * FROM estudiantes';
    try {
        const res = await client.query(query);
        console.log('estudiantes:', res.rows);
    } catch (err) {
        console.error('Error getting all estudiantes:', err);
    }
}

// Function to update a student's data
async function updateStudent(rut, nombre, curso, nivel) {
    const query = 'UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4 RETURNING *';
    const values = [nombre, curso, nivel, rut];
    try {
        const res = await client.query(query, values);
        console.log('Student updated:', res.rows[0]);
    } catch (err) {
        console.error('Error updating student:', err);
    }
}

// Function to delete a student
async function deleteStudent(rut) {
    const query = 'DELETE FROM estudiantes WHERE rut = $1 RETURNING *';
    const values = [rut];
    try {
        const res = await client.query(query, values);
        console.log('Student deleted:', res.rows[0]);
    } catch (err) {
        console.error('Error deleting student:', err);
    }
}

// Example usage of the functions
//addStudent('pedrito', '12345678-9', 'guitarra', 'intermedio');
//addStudent('juanito', '98765432-1', 'batería', 'básico');
//addStudent('pepito', '12345678-f', 'bajo', 'avanzado');
//addStudent('fulanito', '98765432-f', 'teclado', 'intermedio');
//getStudentByRut('12345678-9');
getStudents();
//updateStudent('12345678-9', 'juanito', 'Piano', 'alto');
//deleteStudent('12345678-9');
//deleteStudent('98765432-1');
//deleteStudent('12345678-f');
//deleteStudent('98765432-f');