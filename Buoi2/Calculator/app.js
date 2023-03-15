var http = require('http');
var dt = require('./utils')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World!');
    res.write('Tong hai so 5 + 7 = ' + dt.tinhTong(5, 7) + '\n');
    res.write('Hieu hai so 5 - 7 = ' + dt.tinhHieu(5, 7) + '\n');
    res.write('Tich hai so 5 * 7 = ' + dt.tinhTich(5, 7) + '\n');
    res.write('Thuong hai so 5 / 7 = ' + dt.tinhThuong(5, 7) + '\n');
    return res.end();
}).listen(8080);