const express = require('express');
var cors = require('cors')

const port = process.env.PORT || 3000


const app = express();

// parse application/json
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Welcome to Snack Store api")
})

require('./routers/userRouter')(app);

var allowedDomains = ['http://localhost:3001'];
app.use(cors({
  origin: function (origin, callback) {
    //if (!origin) return callback(null, true);
 
    if (allowedDomains.indexOf(origin) === -1) {
      var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

const db = require('./database/connection')
db.sequelize.sync();

app.listen(3000)
