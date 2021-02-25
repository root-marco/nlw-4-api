import express from 'express';

const app = express();

app.get('/', (req, res) => {
	return res.json({ message: 'Hello, world' });
});

app.post('/', (req, res) => {
	return res.json({ message: 'successfully saved' });
});

app.listen(3000, () => {
	console.log('server is running');
});