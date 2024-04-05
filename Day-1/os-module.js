const os = require("os");

// console.log(os.cpus());
// console.log("Platform", os.platform());
console.log("Hostname", os.hostname());
console.log("Total Memory", os.totalmem() /1024 /1024, "MB");
console.log("Free Memory", os.freemem() /1024 /1024, "MB");
console.log("Netwrok Interfaces", os.networkInterfaces());
console.log("Os Constants", os.constants)