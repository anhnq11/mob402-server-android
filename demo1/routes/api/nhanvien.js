var express = require('express');
var router = express.Router();
var apiNV = require('../../controller/api/nhanvien');

router.get('/listnv', apiNV.getList);
router.post('/addnv', apiNV.addNV);
router.put('/update/:id', apiNV.updateNV);
router.delete('/delete/:id', apiNV.deleteNV);

module.exports = router;