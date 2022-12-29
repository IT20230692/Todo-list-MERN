const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);


const PORT = 8000;
const DB_URL = 'mongodb+srv://chandima:chandima1999@cluster0.eq3wgwj.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> {
    console.log(`DB Connected successfully`);
})
.catch((err) => console.log(`DB connection error`,err));


app.listen(PORT, () =>{
    console.log(`App is running is ${PORT}`);
});