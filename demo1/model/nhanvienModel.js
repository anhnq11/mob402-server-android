var db = require('./db');
const nhanvienScheme = new db.mongoose.Schema({
    manv: { type: String, required: true },
    tennv: { type: String, required: true },
    diemtb: { type: Number, required: true },
    img: { type: String, required: true },
});
let nhanvienModel = db.mongoose.model('nhanvien', nhanvienScheme);
module.exports = nhanvienModel;