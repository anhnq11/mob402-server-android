module.exports = class Student {
    constructor(name, masv, diemtb) {
        this.name = name;
        this.masv = masv;
        this.diemtb = diemtb;
    }
    getInfor = function () { 
        return `${this.name} - ${this.masv} - ${this.getDiem()}\n`
    }

    getDiem = function () {
        var diemtb = 6 + Math.floor(Math.random() * 5);
        return diemtb;
    }
}