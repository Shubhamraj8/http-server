const http = require ("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request Received!\n`
    fs.appendFile("log.txt", log, (err) => {
        switch(req.url){
            case "/":
                res.end("Home");
                break;
            case "/about":
                res.end("Hi! I'm Shubham");
                break;
            default:
                res.end("404 Not Found");
        }
    });
});
myServer.listen(3000, () => console.log("Server Started!"));