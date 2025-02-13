const user = require('../model/user')
const addData=async (req,res)=>{
    if(req){
        const users = new user({
            fullname:"Saswata Roy"
        })
        await users.save()
        console.log(req.body.name)
        console.log(req.params.user)
    }
  res.status(201).json({message:"data added"})
}
const getData=async (req,res)=>{
    
}
const updateData=async (req,res)=>{

}
const deleteData=async (req,res)=>{
    
}
module.exports = {
    addData,
    getData,
    updateData,
    deleteData
}
