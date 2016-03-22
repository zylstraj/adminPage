'use strict'

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');


let publicRouter = express.Router();
let apiRouter = express.Router();

require('./routes/login')(publicRouter);
require('./routes/user-routes')(apiRouter)
// mongoose.connect(config.DB_PORT)
app.use(bodyParser.json());
app.use('/public', publicRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000!');
})
