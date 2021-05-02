const fs = require("fs");
const http = require("http");
const url = require("url");
const host = 'localhost';
const port = 8080;

fs.readFile("./index.html", (err, html) => {
  if (err) return console.log(error);
  http
    .createServer(function (req, res) {
      var queryData = url.parse(req.url, true).query;
      res.writeHead(200, { "Content-Type": "text/html" });
      if (queryData.getBooks == "true") {
        res.end(html);
      } else {
        res.end("No content\n");
      }
    })
    .listen(8080, () => {
        console.log(`Server is running on http://${host}:${port}`);
    });
});