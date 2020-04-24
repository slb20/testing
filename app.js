const express=require("express")


const app=express();

app.get("/", (req,res)=>{
    res.send("this is a test part2")
})

process.title="myApp"
const port=process.env.PORT || 3002

if (process.env.NODE_ENV !== 'test') {
app.listen(port,()=>{
    console.log("Server Has started on 3002");
});
}

module.exports = app;