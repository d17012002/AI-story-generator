const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const dotenv = require('dotenv');

const storyRouter = require('./routes/storyRoutes')

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

dotenv.config();

//localhost url
mongoose.connect("mongodb+srv://webconnect:webconnect123@cluster0.tnchb.mongodb.net/educhampAPI").then(()=>{
}).catch((err)=>{console.log(err)});


require('./models/story')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use('/story', storyRouter);


app.get("/", (req, res)=>{
    res.send("Educhamp services API.")
})

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server Running🚀: http://localhost:5000/");
})