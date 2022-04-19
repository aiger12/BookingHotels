const express = require('express')
const router = express.Router()
const path = require('path')

router
    .route('/tokyo')
    .post((req,res) => {
        res.sendFile(path.resolve('public/tokyo/tokyohtml.html'));
    })


module.exports = router