const http=require('http')
const app=http.createServer()
const dotenv=require('dotenv')
const GetData=require('./models/getData')

dotenv.config()

const PORT=process.env.PORT || 3000
const Server=app.listen(PORT,()=>console.log(`running on ${PORT}`))

const get=async()=>{
    let condition={}
    let res=await GetData('playlists',condition)
    return res
}

Server.on('request',async(req,res)=>{
    const route=req.url
    if(route=='/'){
        let data=await get()
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    }
})