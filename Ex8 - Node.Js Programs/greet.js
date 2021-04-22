const fs = require("fs");
const http = require("http");
const url = require("url");
fs.readFile("greetings.txt", function (err, data) {
  if (err) return console.error(err);
  let greetings = data.toString().trim().split("\r\n");
  console.log(greetings);
  console.log(greetings[Math.floor(Math.random() * greetings.length)]);
  http
    .createServer(function (req, res) {
      var queryData = url.parse(req.url, true).query;
      res.writeHead(200, { "Content-Type": "text/plain" });
      if (queryData.name) {
        res.end(
          greetings[Math.floor(Math.random() * greetings.length)] +
            " " +
            queryData.name +
            "\n"
        );
      } else {
        res.end("Hello World\n");
      }
    })
    .listen(8080);
  console.log("Server running on port 8080");
});