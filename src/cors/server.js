let express = require('express');

let app = express();

app.get('/user', function(req, res) {
    res.setHeader("Content-Type","application/json; Charset=UTF-8");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5500");
    res.setHeader("Access-Control-Allow-Headers","content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);

    res.setHeader("set-cookie","field1=abcdefg");
    res.end(JSON.stringify({
        name: 'Tom',
        age: 20
    }));
});

app.post('/users', function(req, res) {
    res.setHeader("Content-Type","application/json; Charset=UTF-8");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5500");
    res.setHeader("Access-Control-Allow-Credentials", true);

    res.end(JSON.stringify({
        name: 'Jerry',
        age: 25
    }));
});
// 服务器一般会自动实现options方法，如果不满足要求，可以自己实现
app.options('/users', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5500");
    // res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "X-Header,content-type"); //不能为*
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Max-Age", 12000);

    res.end();
});

app.put('/course', function(req, res) {
    res.setHeader("Content-Type","application/json; Charset=UTF-8");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5500");
    res.setHeader("Access-Control-Allow-Credentials", true);

    res.end(JSON.stringify({
        name: 'Kate',
        age: 30
    }));
});
// 服务器一般会自动实现options方法，如果不满足要求，可以自己实现
app.options('/course', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5500");
    res.setHeader("Access-Control-Allow-Methods", "PUT"); // 不能为*
    res.setHeader("Access-Control-Allow-Headers", "x-y-z"); //不能为*
    res.setHeader("Access-Control-Allow-Credentials", true);

    res.end();
});

app.listen(3000, () => {
    console.log("server is running at 3000.");
});