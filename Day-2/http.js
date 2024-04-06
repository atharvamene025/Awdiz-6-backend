const http =require("http");



const server=http.createServer((req, res) =>{
    console.log(req,"req"); 
    if(req.method==="GET" && req.url==="/hello"){
       res.end("hellooo");
    }
    else if(req.method==="GET" && req.url==="/books"){
        res.end("books");
     }
     else if(req.method==="GET" && req.url==="/car"){
        res.end("Car");
     }else{
        res.end("url undefined");
     }

});


server.listen(3001, ()=> {
    console.log("Server Listening on Port 3001; ")
});