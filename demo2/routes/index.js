var express = require('express');
var router = express.Router();
var model = require('../models/ghichuModel');
const ghichuModel = require('../models/ghichuModel');

/* GET home page. */
router.get('/', async (req, res, next) => {
  let list;
  if(typeof(req.query.search) !== 'undefined'){
    if(req.query.search == ''){
      list = await model.find();
    }
    else{
      list = await model.find({ tieude: {$regex: req.query.search, $options: "i"}})
    }
  }
  else{
    list = await model.find();
  }
  res.render('home',{
    list
  });
});

// POST new model
router.post("/", async (req, res) => {
  console.log(req.body)
  await model.create(req.body);
  console.log('Thêm thành công!');
  res.redirect('/');
})

/* GET edit page. */
router.get('/edit/:id', async (req, res, next) => {
  let obj = await model.findById(req.params.id);
  res.render('edit', { 
    obj
  });
});

/* POST edit page. */
router.post('/edit/:id', async (req, res, next) => {
  console.log(req.body);
  let obj = req.body;
  if(obj.status !== 'Check'){
    delete obj.status;
  }
  await model.findByIdAndUpdate({_id: req.params.id}, obj);
  res.redirect('/');
});

/* GET delete page. */
router.get('/delete/:id', async (req, res, next) => {
  await model.findByIdAndDelete(req.params.id);
  console.log('Xóa thành công!');
  res.redirect('/');
});

module.exports = router;
