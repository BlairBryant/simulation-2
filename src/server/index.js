const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive'),
      session = require('express-session'),
      ctrl = require('./ctrl'),
      checkUserSession = require('./middleware/checkUserSession'),
      authCtrl = require('./authCtrl')

require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(checkUserSession)


app.post('/registeruser', ctrl.register)
app.post('/api/auth/register', authCtrl.register)
app.post('/api/properties', authCtrl.postListing)
app.post('/postProperties', ctrl.postProperties)


port = process.env.PORT || 3500

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(port, () => {console.log(`Server listening on port ${port}`)})
})