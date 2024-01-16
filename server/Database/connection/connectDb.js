const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://codeburner0:1234@cluster0.nwrbsrv.mongodb.net/employee",
{useNewUrlParser:true,
useUnifiedTopology:true}).then(()=>{
    console.log("connection is successful");
}).catch((err)=>{
    console.log("mongoose connection is not successful");
})