const express = require('express');
const router = express.Router();

const dataRoute = require('./data.route');


router.use("/data", dataRoute);



module.exports = router;