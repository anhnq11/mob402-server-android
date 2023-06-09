// call all the required packages
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer');
const app = express();

//CREATE EXPRESS APP
app.use(bodyParser.urlencoded({ extended: true }))

//ROUTES WILL GO HERE
// app.get('/', function(req, res) {
//     res.json({ message: 'WELCOME' });   
// });

// ROUTES
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    console.log(file);
    let fileName = file.originalname;
    let dotIndex = fileName.lastIndexOf('.');
    let fName = fileName.substring(0, dotIndex);
    let extendedName = fileName.substring(dotIndex, fileName.length);
    console.log(fName);
    console.log(extendedName);
    let time = new Date().getTime();
    let finalName = fName + '-' + time + extendedName;
    cb(null, finalName)
  }
})

var upload = multer({ storage: storage })

// Xu ly upload 1 file
app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file)
})

//Uploading multiple files
app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
  const files = req.files
  if (!files) {
    const error = new Error('Please choose files')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(files)
})


app.listen(3000, () => console.log('Server started on port 3000'));
