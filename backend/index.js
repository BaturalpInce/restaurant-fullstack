var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())
const PORT = process.env.PORT || 5050;

const { Desserts } = require('./handlers/Desserts');
const { MainDishes } = require('./handlers/MainDishes');
const { Drinks } = require('./handlers/Drinks.js');

app.get('/desserts', Desserts);
app.get('/maindishes', MainDishes);
app.get('/drinks', Drinks);

app.get('/', (req, res) => {
res.send('This is my Full Stack Restaurant Websites API')
})

app.listen(PORT, function () {
console.log(`Demo project at: ${PORT}!`); });
