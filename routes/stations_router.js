const express = require('express')
const router = express.Router()
const Stations = require('../models/stations')

router.get('/api/stations/all', (req, res) => {
    Stations.findAll()
        .then(stations => res.json(stations))
})

module.exports = router