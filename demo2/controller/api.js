var model = require('../models/ghichuModel');
var objReturn = {
    status: 1,
    msg: "Oke"
}
exports.getListObj = async (req, res, next) => {
    let list
    try {
        list = await model.find();
        if (list.length > 0) {
            objReturn.data = list;
        } else {
            objReturn.msg = "Không có dữ liệu"
            objReturn.status = 0
        }

    } catch (error) {
        objReturn.msg = error.message;
        objReturn.status = 0
    }
    res.json(objReturn);
}


exports.addObj = async (req, res, next) => {
    await model.create(req.body).then(result => {
        res.status(200).json({
            result: result
        })
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
};

exports.updateObj = async (req, res, next) => {
    model.findOneAndUpdate({ _id: req.params.id }, req.body).then(result => {
        res.status(200).json({
            updated: result
        })
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
};

exports.deleteObj = async (req, res, next) => {
    const result = await model.deleteOne({ _id: req.params.id })
    res.send("Xoa thanh cong")
};