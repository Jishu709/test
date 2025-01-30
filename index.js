import { createServer } from "http"
const server = createServer((req,res) => {
    if(req.url === "/"){
        res.write("Hello there!");
    }
    res.statusCode(404);
})    
server.listen("3000");
console.log("server running");
