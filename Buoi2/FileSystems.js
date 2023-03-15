// Trả về một log

// Trả về HTML từ HTML

// var http = require('http');
// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//   console.log("Application started and Listening on port 3000");
// });

// app.get("/", (req, res) => {
//   // res.send("<html> <head>Server Response</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
//   res.sendFile(__dirname + "/db.json");
// });

// Trả về HTML từ file HTML

var http = require('http');
var fs = require('fs');

var dt = require('./utils')
// var Nhanvien = dt.Nhanvien();
var Student = require('./student');

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let st1 = new Student('Nam', 'PH20121');
    res.write(st1.getInfor());
    // let nv1 = new dt.Nhanvien('Huy', 'PH20121');
    // res.write(nv1.getInfor());

    // // Tạo file mới - Nếu đã có ghi tiếp
    // fs.appendFile('mynewfile1.txt', 'ggggg!', function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });

    // // Ghi file, nếu đã có nội dung -> Ghi đè
    // fs.writeFile('mynewfile2.txt', 'Hello contentttttttt!', function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });

    // // Ghi file dữ liệu dạng JSON
    // fs.appendFile('mynewfile3.txt', '{"name": "Nam", "age": 20}', function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });

    // // Lưu file vào đường dẫn chưa có sẵn
    // dir = './data/files'
    // if(!fs.existsSync(dir)){
    //   fs.mkdirSync(dir, {recursive: true});
    // }

    // fs.appendFile(dir + 'mynewfile4.txt', 'Create new directory!!', function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });

    // // Mở file
    // // fs.open('mynewfile2.txt', 'w', function (err, file) {
    // //   if (err) throw err;
    // //   console.log('Saved!');
    // // });

    return res.end();
  });
}).listen(8080);