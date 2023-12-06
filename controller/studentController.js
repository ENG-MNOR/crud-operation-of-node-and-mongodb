const express = require('express');
const router=express.Router();
Employee=require('../models/studentModal');
const {generateCrudMethods}=require('../services');
const crud=generateCrudMethods(Employee);
const{validate,found}=require('../valid');
router.get('/',(req, res) =>{
 crud.getAll()
.then(data =>res.json(data))
.catch(err =>console.error(err));
})
router.post('/', (req, res) =>{
  crud.create(req.body)
  .then(data =>res.send(data))
  .catch(err =>console.error(err))
})

router.put('/:id',validate,(req, res)=>{
    crud.update(req.params.id,req.body)
  .then(data =>{
    if(data)res.send(data)
    else found(req, res)})
  .catch(err =>console.log(err))
})
router.delete('/:id',validate,(req, res)=>{
    crud.delete(req.params.id)
     .then(data =>res.send("successfully deleted"))
     .catch(err =>console.log(err))
})

module.exports=router