const express = require('express')
const router = express.Router()
const path = require('path')

router
    .route('/osaka')
    .get((req,res) => {
        res.sendFile(path.resolve('public/tosaka/tosakahtml.html'));
    })

module.exports = router