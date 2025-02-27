const Profilemid = (req,res,next)=>{
    if(req.params.user==="Riya"){
        next()
    }
    else{
        res.status(400).json({message:"No profile found"})
    }
}
module.exports = Profilemid