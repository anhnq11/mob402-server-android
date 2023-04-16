var db = require('./db');
const ghichuScheme = new db.mongoose.Schema({
    tieude: { type: String, required: true },
    noidung: { type: String, required: true },
    img: { type: String},
    status: { type: String},
});
let ghichuModel = db.mongoose.model('ghichu', ghichuScheme);
module.exports = ghichuModel;