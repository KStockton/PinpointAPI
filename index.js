const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const pinRoute = require('./routes/pins');

const app = express();
dotenv.config();

app.use(express.json())

mongoose.set('strictQuery', false) // added to supress warning

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log('mongoDB connected 🥳'
  )
})
.catch((error) => {
  console.log(error)
})


app.use('/api/v1/pins', pinRoute)


const port = 1234
app.listen(port, () => {
  console.log('Server is running...✅')
})