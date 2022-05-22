let express = require('express');

let app = express();
app.get('/say', function(req, res) {
  let { wd, callback } = req.query;
  res.setHeader("Content-Type","text/javascript; Charset=UTF-8");
  res.end(`${callback}('我爱你')`);
});

app.listen(3000, () => {
    console.log("server is running at 3000.");
});