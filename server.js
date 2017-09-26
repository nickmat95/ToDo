const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();

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

app.post('/api/tasks/:id',(req, res) => {
    res.send('POST');
});

app.delete('/api/tasks/:id',(req, res) => {
    res.send('DELETE');
});

app.listen(8070,() => {
    console.log('Express server listening on port 8070');
});