const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('site_index.html');
const about = fs.readFileSync('about.html');
const checkresult = fs.readFileSync('checkresult.html');
const myprofile = fs.readFileSync('myprofile.html');
const sign_up = fs.readFileSync('sign_up.html');
const site_index = fs.readFileSync('site_index.html');
const viewelections = fs.readFileSync('viewelections.html');
const votinghistory = fs.readFileSync('votinghistory.html');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Constant-Type', 'text/html');
    res.end(home);
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});