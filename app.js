const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Ich glaube du bist die Besten!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
