const express = require('express')
const router = express.Router()
const path = require('path')

router
    .route('/niigata')
    .get((req,res) => {
        res.sendFile(path.resolve('public/niigata/nigatahtml.html'));
    })

module.exports = router