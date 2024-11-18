const constants = require('../constants/index');
const dataModel = require('../models/data.model');


const getAllData = async (req, res) =>{
    let result = await dataModel.getAllData();
    res.send(result);
}

module.exports = {
    getAllData:getAllData
}
