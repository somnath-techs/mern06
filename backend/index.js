// const add = require('./module/allcalculation')
// const sum =add(1,2)
// console.log(sum)
// const {add,div,sub,mul} = require('./module/add')
// const sum = require('./module/allcalculation')
// console.log("this called from main file : ",sum)
// const fs = require('fs')
// console.log(fs)
// fs.writeFileSync("t.txt","Hello students this is your first file handaling program")
// const reading = fs.readFileSync("t.txt")
// console.log(""+reading)//Hello students this is your first file handaling program
// console.log("Starting reading file...")
// fs.readFile("t.txt","utf-8",(err,content)=>{
//     if(content){
//         console.log(content)
//     }else{
//           console.log(err)
//     }
    
// })
// console.log("Ending reading file...")
// fs.close()
//delete/rename/append/appendFileSync/remove homework
// const http = require('http')
// require('dotenv').config()
// const server = http.createServer((req,res)=>{
//     const myData= "Hello Bndhu"
//     if(req.url==='/'){
//         res.end("this is home page")
//     }else if(req.url==="/contact"){
//         res.end(`this is contact page ${myData}`)
//     }else if(req.url==="/profile/:user"){
//         res.end(`this is profile page ${user}`)
//     }
// })
// app.get('/',userApi.home)
// app.get('/profile/:user',userApi.profile)
require('dotenv').config()
const express = require('express')
const userRouter = require("./router/router")
const connDB = require("./config/db")
const cors = require('cors')

const app = express()
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.static('public'))
app.use("/api/v1",userRouter)

const PORT=process.env.SERVER_PORT
connDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on http://localhost:${PORT}/`)
    })
})


