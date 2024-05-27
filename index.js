const express = require('express');
const path = require('path')
const {connectToMongoDB} = require('./connect');
const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRouter')

const URL = require('./models/url')

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").
then(()=>{console.log("MongoDB connected Successfully!!");});

app.set("view engine", "ejs");
app.set('views', path.resolve('./views'))

// To parse json data
app.use(express.json());
// To parse form data
app.use(express.urlencoded({extended: false}));

app.use('/url', urlRoute);

app.use('/', staticRoute)


app.listen(PORT, ()=>{console.log(`App started at ${PORT}`);});
