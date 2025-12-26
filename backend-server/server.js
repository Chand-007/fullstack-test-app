var express = require("express")
var cors = require("cors")
var app = express()

app.use(cors())

app.get('/',(req,res)=>{
    async function fetchComments(){
        
        const raw_comments = await fetch("https://jsonplaceholder.typicode.com/comments")
        const comments = await raw_comments.json()
        res.end(JSON.stringify(comments))
    }
    fetchComments()
})

app.listen(5000,()=>{
    console.log("Server listening on port 5000")
})
