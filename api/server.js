const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

const categoryRoute = require('./routes/category.route');
const subcategoryRoute = require('./routes/subcategory.route');
const parameterRoute = require('./routes/parameter.route');
const optionRoute = require('./routes/option.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/category', categoryRoute);
app.use('/category/subcategory', subcategoryRoute);
app.use('/admin/parameter', parameterRoute);
app.use('/admin/parameter/option', optionRoute);
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});