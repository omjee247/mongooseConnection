const express = require('express');
const router = express.Router();

const dataController = require('../controller/data.controller');

router.get('/', dataController.getAllData)
// localhost:5000/data/getData
router.post('/getData', dataController.getAllData)
module.exports = router;