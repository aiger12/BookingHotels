const express = require('express')
const router = express.Router()
const path = require('path')

router
    .route('/kyoto')
    .get((req,res) => {
        res.sendFile(path.resolve('public/kyoto/kyotohtml.html'));
    })

module.exports = router