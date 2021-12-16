const mongoose=require('mongoose')
const connectDB=require('../config/db')

const RemoveData=async(cName,data)=>{
    try{
        await connectDB()
        let connection=await mongoose.connection
        let res=await connection.collection(cName).deleteMany(data)
        return res
    }catch(err){
        console.log(`setdata Error :${err.message}`)
    }
}

module.exports=RemoveData