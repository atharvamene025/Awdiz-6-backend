
const { ifError } = require("assert");
const { error } = require("console");
const fs = require("fs");

// fs.writeFile("Hello.txt", "Welcome 4", (error)=>{
//     if (error){
//         console.log(error);
//     }else{
//         console.log("File Is Written Successfuly");
//     }
// })

// fs.readFile("./Hello.txt", "utf8", (error, data) =>{
//     if (error) throw error;
//     console.log(data);
// })

fs.writeFile("Welcome.txt", "Welcome File", (error)=>{
    if (error){
        console.log(error);
    }else{
        console.log("File Created Succesfully");
    }
})

fs.readFile("./Welcome.txt", "utf-8", (error, data)=>{
    if (error) throw error;
    console.log(data);
})
