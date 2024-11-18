const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://nixon:JKJe4ggIWm8y5SSZ@cluster0.oyy7s.mongodb.net/mdb?retryWrites=true&w=majority';



const mongooseConnection = async ()=>{
    try{
        await mongoose.connect(connectionString, { useNewUrlParser: true , useUnifiedTopology: true});
        console.log("Connected to Database Successfully.")
    }catch(error){
        console.log("Error In Connecting to the DB - ", error);
    }
}

module.exports = {
    mongooseConnection : mongooseConnection
}