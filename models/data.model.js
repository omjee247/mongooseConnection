const dataSchema = require('./Data');

const getAllData = async ()=>{
    const result = await dataSchema.Data.find();
    return result;
}

module.exports = {
    getAllData:getAllData
}
