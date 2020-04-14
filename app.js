const express=require("express")


const app=express();

app.get("/", (req,res)=>{
    res.send("this is a test part2")
})

const port=process.env.PORT || 3001
app.listen(port,()=>{
    console.log("Server Has started on 3001");
});