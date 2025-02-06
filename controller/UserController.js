// const UserController ={
//     addData:async (req,res)=>{

//     },
//     getData:async (req,res)=>{
        
//     },
//     updateData:async (req,res)=>{

//     },
//     deleteData:async (req,res)=>{
        
//     }
// }
// module.exports = UserController;
// 6/02/2025
const addData=async (req,res)=>{
    if(req){
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
