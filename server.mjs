import express from 'express'
import path from 'path';
const app = express()
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

// app.get('/', (req, res) => {
//   res.send('Hello World')
//   console.log('hell')
// })
app.get('/weather/:cityName', (req, res) => {
  console.log('hell')
  
  let weatherData = {
    karachi:{
      tempC: 30,
      humidity: 45,
      lowerTemp: 27,
      higherTemp: 34
    },
    lahore:{
      tempC: 20,
      humidity: 50,
      lowerTemp: 17,
      higherTemp: 24
    }
  }


let userInput = req.params.cityName.toLowerCase();
console.log(userInput);
let weatherInput = weatherData[userInput]

if (weatherInput) {
  res.send(weatherInput);
  
} else {
  res.status(404).send(`Weather data not found for your ${res.params.cityName} city.`);
}

})


app.use('/',express.static(path.join(__dirname, 'public')))

app.get('/profile', (req, res) => {
  res.send('This is profile page')
  console.log('Profile page')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})