exports.myDateTime = function () {
    return Date();
}

exports.tinhTong = function (a,b){
    var tong = a + b;
    return tong;
}

exports.Nhanvien = function(ten, manv){
    this.ten =  ten;     
    this.manv = manv;
    this.getInfo = function(){
        return `${this.ten} - ${this.manv}`;
    }
}