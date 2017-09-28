/* @flow */

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('database.sqlite');

app.get('/api/tasks',(req, res) => {

    let query = 'SELECT * FROM tasks';

	db.serialize(() => {
    	db.all(query, (err, arr) => (err) ? console.log(err.message) : res.send(arr));
	});
});

app.put('/api/tasks/:id',(req, res) => {
    res.send('PUT');
});

app.post('/api/tasks',(req, res) => {

    let query = `INSERT INTO tasks(name, status) VALUES("${req.body.title}", 0)`;

    db.run(query, err => {
        if (err) {
            return console.log(err.message);
        }

        let selectQuery = 'SELECT * FROM tasks ORDER BY id DESC';

        db.get(selectQuery, (err, row) => (err) ? console.log(err.message) : res.send(row));
    });
});

app.delete('/api/tasks',(req, res) => {
    let id = req.body.id;
    let query = `DELETE FROM tasks WHERE id = ${id}`;

    db.run(query, err => (err) ? console.log(err.message) : res.send({id: id}));
});

app.listen(8081,() => {
    console.log('Express server listening on port 8081');
});