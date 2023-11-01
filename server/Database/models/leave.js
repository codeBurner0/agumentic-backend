const mongoose=require('mongoose');
const leaveSchema=new mongoose.Schema({
    employeeId:{
        type:String,
        required:true
    },
    startDay:{
        type:String,
        required:true,
    },
    endDay:{
        type:String,
        required:true,
    },
    leaveType:{
        type:String,
        required:true,
    }
})
module.exports=mongoose.model('leave',leaveSchema)