const mongoose=require('mongoose')
const connectDB=require('../config/db')

const getData=async(cName,condition)=>{
    try{
        await connectDB()
        const connection =await mongoose.connection
        let res=await connection.collection(cName).find(condition).toArray()
        return res
    }catch(err){
        console.log(`getdata Error :${err.message}`)
    }
}

module.exports=getData
