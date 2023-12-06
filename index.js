var express=require('express');
var app = express();
const bodyParser=require('body-parser');
const { connect } = require('http2');

const connectdb=require('./db.js');
studentRoutes=require('./controller/studentController.js')
app.use(bodyParser.json());
app.use('/api/students',studentRoutes);
   

connectdb()
.then(() =>{
    console.log('Connected successfully');
    app.listen(3000, () => {
        console.log('Server started on port 3000');
      });
})
.catch(err =>console.error(err));
















//  .then(()=> {
//     app.listen(5009 , () => console.log("Server Port is on", Port, " ", dbName));

// })
    
// })
// .catch((error)=> console.log(`${error} did not connect!`))







// app.listen(1200,()=>{
//     console.log('the server is running at port:localhost/:1200');
// })