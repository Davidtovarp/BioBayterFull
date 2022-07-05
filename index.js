const express = require('express');
const nodemailer = require('nodemailer');
const emial=require("./utils/mail");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(express.urlencoded());


app.post("/getInTouch", (req,res)=>{
    emial.sendEmail(req.body.email,`${req.body.subject} ${req.body.phone}`,req.body.message)
    res.send(true);
})

app.listen(port, () => console.log(`Server listening on port: ${port}`));