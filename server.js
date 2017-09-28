/* @flow */

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

const db = new sqlite3.Database('database.sqlite');

app.get('/api/tasks',(req, res) => {
	db.serialize(() => {
    	db.all("SELECT * FROM tasks", (err, arr) => {
    		res.send(arr);
    	});
	});
});

app.put('/api/tasks/:id',(req, res) => {
    res.send('PUT');
});

app.post('/api/tasks',(req, res) => {
	console.log('post:', req);
    res.send('POST');
});

app.delete('/api/tasks/:id',(req, res) => {
    res.send('DELETE');
});

app.listen(8081,() => {
    console.log('Express server listening on port 8081');
});