const mongoose=require('mongoose');
const connectDB=async()=>{
    const conn=await mongoose.connect('mongodb+srv://dibakardey7675:dibakardey7675@cluster0.rovlcbe.mongodb.net/mgmt_db?retryWrites=true&w=majority');
    console.log(`Mongoose Connected: ${conn.connection.host
    }`.cyan.underline.bold);
}
module.exports=connectDB;
