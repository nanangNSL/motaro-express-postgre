require('dotenv').config();
const express = require('express');
const glob = require('glob');
const app = express();
const errorController = require('./api/controllers/errorController');
const cors = require('cors');
const bodyParser = require('body-parser');

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());


glob.sync('./api/routes/Route.js').forEach((file) => {
    require(file)(app);
});

app.use(errorController.notFound);
app.use(errorController.error);


app.listen(process.env.PORT || 8080, () => {
    console.log('CORS-enabled web server listening on port', process.env.PORT || 8080);
});