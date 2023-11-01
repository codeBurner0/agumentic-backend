const mongoose=require('mongoose');
const historySchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    login:{
        type:Number,
        required:true,
    },
    logout:{
        type:Number,
        required:true,
    },
    present:{
        type:String,
        required:true,
    },
    absent:{
        type:String,
        required:true,
    }
})
module.exports=mongoose.model('history',historySchema)