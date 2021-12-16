const mongoose=require('mongoose')
const ConnectDB=require('../config/db')

const setData=async(cName,data,many)=>{
    try{
        await ConnectDB()
        const connection=await mongoose.connection
        if(many){
            let res=await connection.collection(cName).insertMany(data)
            return res
        }else{
            let res=await connection.collection(cName).insertOne(data)
            return res
        }
    }catch(err){
        console.log(`setdata Error :${err.message}`)
    }
}

module.exports=setData