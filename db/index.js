

const mongoose = require("mongoose");
//connect() accepts three arguments: the database uri, object, and function
mongoose.connect(process.env.MONGOD_URI, {useNewUrlParser:true}, err => {
    console.log(err||"Successfully connected to mLab")
} )

module.exports = mongoose;