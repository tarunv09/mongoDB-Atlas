
const mongoose = require("mongoose");


/*<user> is your atlas database username, 
  <password> is your atlas database password,
  <cluster-name> is your atlas database cluster.
 *I'm directly using some credentials here for ease of demonstration. 
 *However, this is not the recommended way to use credentials.
 *Try to use dotenv node module and store credentials in .env file.
*/

const uri =  "mongodb+srv://<user>:<password>@<cluster-name>-kpump.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(uri), {useUnifiedTopology: true, useNewUrlParser: true};
    console.log("db connected");
};

module.exports = connectDB;
