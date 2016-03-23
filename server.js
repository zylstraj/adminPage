'use strict'

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let config = require('./config/enviro.js');

let publicRouter = express.Router();

mongoose.connect(config.MONGO_URI)
app.use(bodyParser.json());

require('./routes/login')(publicRouter);
require('./routes/user-routes')(publicRouter);

app.use(publicRouter);

app.listen(config.PORT, () => {
  console.log('Server started on port 3000!');
})
