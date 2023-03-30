var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/dat", (req, res, next) => {
  console.log("Dữ liệu post");
  console.log(req.body);
  res.send(req.body);
});
module.exports = router;
