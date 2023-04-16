var express = require('express');
var router = express.Router();
var api = require('../../controller/api');

router.get('/list', api.getListObj);
router.post('/add', api.addObj);
router.put('/update/:id', api.updateObj);
router.delete('/delete/:id', api.deleteObj);

module.exports = router;