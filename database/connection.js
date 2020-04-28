
const mongoose = require("mongoose");

const uri =  "mongodb+srv://user:<password>@<cluster-name>-kpump.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(uri), {useUnifiedTopology: true, useNewUrlParser: true};
    console.log("db connected");
};

module.exports = connectDB;
