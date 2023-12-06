const objectId=require('mongoose').Types.ObjectId;
const validate=(req,res,next) => {
    if(objectId.isValid(req.params.id)==false)
    res.status(400).send.json({err:"given invalid id"})
    else next()
}
const found=(req,res)=>{
res.status(404).json({
    err:"no record with id:"+req.params.id
})
}
module.exports ={validate,found}