const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use( (req, res) => {
  res.send('<h1>Hello World</h1>')
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Node Server runing on Port: ${PORT}!`))
