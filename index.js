const dotenv=require('dotenv')
const GetData=require('./models/getData')
const SetData=require('./models/setData')
const RemoveData=require('./models/removeData')

dotenv.config()

const get=async()=>{
    let condition={}
    // let condition={name: "ram"}
    // let condition={$or:[{name: "ram"},{address:"address"}]}
    // let condition={name: /.*y.*/}
    let res=await GetData('playlists',condition)
    console.log(res)
}


const set=async()=>{
    // let data= { name: "Company Inc", address: "Highway 37" }
    let data=([
        {name: "Ram Prakash", address: "MTM"},
        { name: "Surya", address: "KUZ" }
     ])
    let res=await SetData('playlists',data,true)
    console.log(res)
}

const remove=async()=>{
    let data={name:'Anya'}
    // let data={name:{$in:['Steve','ram']}}
    let res=await RemoveData('playlists',data)
    console.log(res)
}


// set()
// remove()
get() 