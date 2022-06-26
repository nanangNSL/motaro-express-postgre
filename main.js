require('dotenv').config();
const express = require('express');
const glob = require('glob');
const app = express();
const errorController = require('./api/controllers/errorController');


app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



glob.sync('./api/routes/Route.js').forEach((file) => {
    require(file)(app);
});

app.use(errorController.notFound);
app.use(errorController.error);



app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port', process.env.PORT || 3000);
});