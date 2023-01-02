const express = require('express'); //henter express
const app = express(); //setter app til express
const port = 3000; //setter porten til 3000

//bruker get-metoden for å hente data
app.get('/', (req, res) => {
	res.send('Hello World!');
});

//kjører på port 3000
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
