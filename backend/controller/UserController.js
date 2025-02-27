const user = require('../model/user')



const addData=async (req,res)=>{
    try{
        if(req){
            const users = new user(req.body)
            await users.save()
        }
        res.status(201).json({message:"data added"})
    }catch(err){
        res.status(500).json({message:err.message,data:[],success:false})
    }
}


const getData=async (req,res)=>{
   try{
      if(req){
        const userData= await user.find()
        if(userData){
          res.status(200).json({message:"data fetched successfully",data:userData,success:true})
        }else{
            res.status(404).json({message:"data fetched failed",data:[],success:false})
        }
  
      }

   }catch(err){
      res.status(500).json({message:"data fetched failed",data:err.message,success:false})
   }
     
}
const updateData=async (req,res)=>{
    try {
        if(req){
            const userUpDate= await user.findByIdAndUpdate(req.params.id,req.body,{new:true})
            if(userUpDate){
                res.status(200).json({message:"data updated successfully",data:userUpDate,success:true})
            }else{
                res.status(404).json({message:"data updated failed",data:[],success:false})
            }
        }
    } catch (error) {
        res.status(500).json({message:"data updated failed",data:error.message,success:false})
    }
       
}
const deleteData=async (req,res)=>{
    try{
          if(req){
            const userDelete = await user.findByIdAndDelete(req.params.id)
            if(userDelete){
                res.status(201).json({message:"data deleted successfully",data:userDelete,success:true})
            }else{
                res.status(404).json({message:"data deleted fails",data:[],success:true})
            }
          }
    }catch(err){
        res.status(500).json({message:"data deleted failed",data:err.message,success:false})
    }
}
module.exports = {
    addData,
    getData,
    updateData,
    deleteData
}
