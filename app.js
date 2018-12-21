/**
 * Created by Administrator on 2018/12/20 0020.
 */
const express = require('express')
const app = express()
const router = require('./router')
    app.use(express.static('public'));
    app.use(router);
app.listen(3000, () => console.log('Example app listening on port 3000!'))