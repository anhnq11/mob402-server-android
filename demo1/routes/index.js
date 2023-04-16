var express = require('express');
var router = express.Router();
const multer = require("multer");
const fs = require("fs");
const model = require("../model/nhanvienModel");
const path = require("path");
const { findByIdAndUpdate } = require('../model/nhanvienModel');
const { models } = require('mongoose');


// SET STORAGE
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
})

const upload = multer({ storage: storage }).single("img");

/* GET home page. */
router.get('/', async (req, res, next) => {
  let listNV;
  if(typeof(req.query.search) !== 'undefined'){
    if(req.query.search == ''){
      listNV = await model.find();
    }
    else{
      listNV = await model.find({ tennv: req.query.search})
    }
  }
  else{
    listNV = await model.find();
  }
  res.render('home',{
    listNV
  });
});

router.post("/", upload, async (req, res) => {
  await model.create(req.body);
  res.redirect('/');
})

/* GET edit page. */
router.get('/edit/:id', async (req, res, next) => {
  let nv = await model.findById(req.params.id);
  res.render('edit', { 
    nv
  });
});

/* GET edit page. */
router.post('/edit/:id', async (req, res, next) => {
  await model.findByIdAndUpdate({_id: req.params.id}, req.body);
  res.redirect('/');
});



/* GET detail page. */
router.get('/detail/:id', async (req, res, next) => {
  let nv = await model.findById(req.params.id);
  res.render('detail', { 
    nv
  });
});

/* GET delete page. */
router.get('/delete/:id', async (req, res, next) => {
  await model.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
