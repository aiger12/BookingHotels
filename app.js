const express=require('express');
const https=require('https')
const ejs=require('ejs')
const bodyparser=require('body-parser')
const {response} = require('express');

const app=express();
const port=3000;
app.use(bodyparser.urlencoded({extended:true}))
app.get("/main",(req, res) => {
    res.sendFile(__dirname+"/public/main/index.html")
})

app.use(express.static('public'));
app.use(express.static('public/main'));
app.use('/',require('./routes/mainRoute'));
app.use('/tokyo',require('./routes/tokyoRoute.html'));
app.use('/kyoto',require('./routes/kyotoRoute'));
app.use('/osaka',require('./routes/tosakaRoute'));
app.use('/niigata',require('./routes/niigataRoute'));

app.post('/main',((req, res) => {
    let cityname=req.body.city
    let key="020a52ec906d3d142d0bd930abb212d4"
    let url="https://api.openweathermap.org/data/2.5/weather?q=" +cityname+ "&appid="+key+"&units=metric&mode=json"
    https.get(url,function (response){
       response.on('data',data=>{

           let a=JSON.parse(data)
           let temp=a.main.temp
           let cond=a.weather[0].description
           res.send("weather in "+cityname+" is: "+cond+" "+temp+"degrees")
       })
    })
}))

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);