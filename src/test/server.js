// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.setHeader('content-length', 12);
//     res.write('helloworld');
//     res.end();
// });

// server.listen(3000, () => {
//     console.log('server is running at 3000...');
// });

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log(req.url);

  if(req.url === '/') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Content-Length', 10);
    res.setHeader('Transfer-Encoding', 'chunked');
    res.write("<p>来啦</p>");

    setTimeout(() => {
      res.write("第一次传输<br/>");
    }, 1000);
    setTimeout(() => {
      res.write("第二次传输");
      res.end()
    }, 2000);
  }
  else {
    res.write("Hello");
    res.end();
  }
})

server.listen(8009, () => {
  console.log("成功启动");
})