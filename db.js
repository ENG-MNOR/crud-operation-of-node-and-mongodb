const  mongoose  = require("mongoose");
dbUri="mongodb+srv://moha:0615497725@cluster0.sr1do9l.mongodb.net/school_db?retryWrites=true&w=majority"

module.exports= ()=>{
   return mongoose.connect(dbUri)
}