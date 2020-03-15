var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var AYLIENTextAPI = require('aylien_textapi')
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.static('./dist'))

console.log(__dirname)


var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

console.log("hi ",process.env.API_ID)
app.get('/', function (req, res) {
    console.log('hi!')
    res.sendFile('./dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    console.log('inside tes!')
    res.send(mockAPIResponse)
})

app.get('/aylien', function (req, res) {
    console.log('inside aylien!')
    textapi.sentiment({
      'text': 'John is a very good football player!'
    }, function(error, response) {
      if (error === null) {
        console.log("heyyyy");
        res.send(response);
      }
    });
})

