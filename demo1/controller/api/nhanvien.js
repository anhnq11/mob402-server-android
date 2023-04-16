var model = require('../../model/nhanvienModel');
var objReturn = {
    status: 1,
    msg: "Oke"
}
exports.getList = async (req, res, next) => {
    let listNV
    try {
        listNV = await model.find();
        if (listNV.length > 0) {
            objReturn.data = listNV;
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


exports.addNV = async (req, res, next) => {
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

exports.updateNV = async (req, res, next) => {
    model.findOneAndUpdate({ _id: req.params.id }, req.body).then(result => {
        res.status(200).json({
            updated_product: result
        })
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
};

exports.deleteNV = async (req, res, next) => {
    const result = await model.deleteOne({ _id: req.params.id })
    res.send("Xoa thanh cong")
};