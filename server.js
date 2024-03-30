require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const session = require("express-session");

// requiring routers
const homeRouter = require('./routes/home_router')
const ownersRouter = require('./routes/owners_router')
const stationsRouter = require('./routes/stations_router')
const statsRouter = require('./routes/stats_router')

// converting to JS from JSON
app.use(express.json())
app.use(express.static('client'))

// ejs
app.set('view engine', 'ejs')

app.use(
  session({
    secret: process.env.SESSION_SECRET || "mistyrose",
    resave: false,
    saveUninitialized: true,
  })
);

// routers
app.use(homeRouter)
app.use(ownersRouter)
app.use(stationsRouter)
app.use(statsRouter)

// listening port
app.listen(port, () => {
    console.log(`The server is now listening on ${port}`);
})
