const http = require("http");

// 1. 客户端请求
const server = http.createServer((request, response) => {
    // 代理服务器和浏览器交互，存在跨域
    response.writeHead(200, {
        "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*"
    });

    // post数据可能比较大，所以分段传输
    let str = '';
    request.on("data", function(data){
        str += data;
    });
    request.on("end", function(){
        console.log(str);
    });

    // 2. 将请求转发给真正的服务器
    const proxyRequest = http.request({
        host: "localhost",
        port: 4000,
        url: "/",
        method: request.method,
        headers: request.headers
    }, (serverResponse) => {
        let body = '';
        // 3. 获取服务器的响应
        serverResponse.on("data", (chunk) => {
            body += chunk;
        });
        serverResponse.on("end", () => {
            // 4. 将响应发给浏览器
            response.end(body);
        });
    }).end();
});

server.listen(3000, () => {
    console.log("proxy server is running at 3000...");
});