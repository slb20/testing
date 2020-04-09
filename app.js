const express=require("express")


const app=express();

app.get("/", (req,res)=>{
    res.send("this is a test")
})

const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log("Server Has started on 3000");
});