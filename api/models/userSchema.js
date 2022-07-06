const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    userName:{type:String , required:true},
    email:{type:String , required:true},
    password:{type:String , required:true},
    address:{type:String , required:true},
    contact:{type:String , required:true}
})

module.exports=mongoose.model('user' , UserSchema);