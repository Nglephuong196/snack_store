const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000


const app = express();

// parse application/json
app.use(express.json())

require('./routers/userRouter')(app);

const db = require('./database/connection')
db.sequelize.sync();


app.listen(3000)
