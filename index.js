let http = require('http');
let fs = require('fs');

http
  .createServer(function(req, res) {
    if (req.url === '/') {
      console.log(req.url);
      fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end;
      });
    } else if (req.url === '/about') {
      console.log(req.url);
      fs.readFile('about.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end;
      });
    } 
    else if (req.url === '/contact-me') {
      console.log(req.url);
      fs.readFile('contact-me.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end;
      });
    }
    else {
      console.log(req.url);
      fs.readFile('404.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end;
      });
    }
  })
  .listen(8080);
