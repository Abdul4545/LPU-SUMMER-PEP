const http = require("http")
const fsPromises = require("fs/promises")

const server = http.createServer(async(req, res) => {

    if(req.url === "/" || req.url === "/home") {

        res.setHeader("Content-Type", "text/html");
    
        const stream = await fsPromises.readFile("./Pages/homepage.html", "utf-8")
        res.end(stream);
    }

    else if(req.url == "/Abdul") {
        const moid = await fsPromises.readFile("./Pages/abdul.html", "utf-8")
        res.end(moid);
    }

    else {
        res.end("Not found")
    }
})

server.listen(34000, () => {
    console.log("----- Listening at 34000 --------");
})
