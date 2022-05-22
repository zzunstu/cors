const http = require("http");

const data = { title: "Hello?", password: "123456"};
const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.end(JSON.stringify(data));
    }
});

server.listen(4000, () => {
    console.log("server is running at 4000...");
});