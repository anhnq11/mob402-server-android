var express = require("express");
var router = express.Router();
var userController = require("../controller/list.controller");
// tạo các trang

// GET
router.get("/list", userController.getUserList);
router.get("/form", userController.getFormAdd);

// POST
router.post("/form", userController.getFormAdd);
// router.post("/list", userController.getUserList);

//bắt buộc
module.exports = router;
