const mongoose=require('mongoose');
module.exports=mongoose.model("student",{
    name:{type:"string"},
    school:{type:"string"},
    address:{type:"string"},
})