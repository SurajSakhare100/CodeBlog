const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const userSchema=Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:4,
        max:20,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        min:4,
        max:20,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
        min:4,
        max:20,
    },
})

const UserModel=model('User',userSchema);
module.exports=UserModel;