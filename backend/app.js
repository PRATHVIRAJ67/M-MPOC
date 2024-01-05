const express = require('express');
const app = express();
const cors = require('cors');
const UserRoute = require('./router/user.router');

app.use(cors());


app.use('/', UserRoute);

app.use((req, res, next) => {
    console.log("No route found");;
    res.json('Invalid route');
})


module.exports = app;