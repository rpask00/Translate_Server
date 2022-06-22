const express = require('express');
const app = express();
const router = require('./routes/api');
const path = require('path')
const cors = require('cors');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const corsFunctions = require('./cors')
app.use(corsFunctions.allowCrossDomain);
app.use(cors(corsFunctions.corsOptions));


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true });

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use('/', router)

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening at 3000')
})




// git add .
// git commit -am "make it better"
// git push heroku master
