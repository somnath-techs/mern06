const myMIddleware =(req,res,next)=>{
    // body or ypu can say the rask
    console.log("I am middleware1");
    console.log("I am middleware2");
    if(req.url==="/"){
        console.log("I am middleware3");
        next();
    }else{
        res.send("somethins went to wrong");
    }
    
}
module.exports = myMIddleware;