exports.generateCrudMethods= Modal=>{
    return{
        getAll: ()=> Modal.find(),
        create: record => Modal.create(record),
        // getAll: ()=> Modal.find(),
        update: (id,record)=> Modal.findByIdAndUpdate(id,record,{new: true}),
        delete: (id)=> Modal.findByIdAndDelete(id)
    }
}