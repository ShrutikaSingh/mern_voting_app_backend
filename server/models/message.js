import mongoose from 'mongoose';


const messageSchema=new mongoose.Schema({
text:{
    type:String,
    unique:true,
 },
});
 
const Message1=mongoose.model('Message1',messageSchema);

export default Message1;