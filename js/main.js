var btnTinhLuong = document.getElementById('btnTinhLuong');
btnTinhLuong.onclick = function() {
    // Input: 
    var tienLuong1Ngay = document.getElementById('tienLuong1Ngay').value;
    var soNgayLam = document.getElementById('soNgayLam').value;
    // Output:
    var tongLuong = 0;
    // progress:
    tongLuong = tienLuong1Ngay * soNgayLam;
    // Hiển Thị ra màn hình:
    document.getElementById('tongLuong').innerHTML = tongLuong.toLocaleString() + ' VNĐ';
}


var btnTinhTB = document.getElementById('btnTinhTB');
btnTinhTB.onclick = function() {
    // Input:
    var soThuc1 = document.getElementById('soThuc1').value;
    var soThuc2 = document.getElementById('soThuc2').value;
    var soThuc3 = document.getElementById('soThuc3').value;
    var soThuc4 = document.getElementById('soThuc4').value;
    var soThuc5 = document.getElementById('soThuc5').value;
    // Output:
    var trungBinh = 0;
    // progress:
    trungBinh = (Number(soThuc1) + Number(soThuc2) + Number(soThuc3) + Number(soThuc4) + Number(soThuc5)) / 5;
    // Hiển thi ra màn hình:
    console.log(trungBinh);
    document.getElementById('trungBinh').innerHTML = trungBinh;
}

var btnChuyenDoi = document.getElementById('btnChuyenDoi');
btnChuyenDoi.onclick = function() {
    // Input:
    const USD = 23500;
    var soUSD = document.getElementById('soUSD').value;
    // Output:
    var chuyenDoi = 0;
    // progress:
    chuyenDoi = soUSD * USD;
    // Hiển thị ra màn hình:
    document.getElementById('chuyenDoi').innerHTML = chuyenDoi.toLocaleString() + ' VNĐ';
}


var btnTinh = document.getElementById('btnTinh');
btnTinh.onclick = function() {
    // Input:
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    // Output:
    var DT = 0;
    var CV = 0;
    // progress:
    DT = chieuDai * chieuRong;
    CV = ( (Number(chieuDai) + Number(chieuRong)) * 2);
    // Hiển thị ra màn hình:
    document.getElementById('dienTich').innerHTML = DT + ' Mét Vuông';
    document.getElementById('chuVi').innerHTML = CV + ' Mét';
}

var btnTong3KySo = document.getElementById('btnTong3KySo');
btnTong3KySo.onclick = function() {
    // Input:
    var so3ChuSo = document.getElementById('so3ChuSo').value;
    // Output:
    var tong3KySo = 0;
    // progress:
    var hundred = Math.floor(so3ChuSo / 100);
    console.log(hundred);
    var ten = Math.floor((so3ChuSo % 100) / 10);
    console.log(ten);
    var unit = so3ChuSo % 100 % 10;
    console.log(unit);
    tong3KySo = ( Number(hundred) + Number(ten) + Number(unit) );
    // Hiển thị ra màn hình:
    document.getElementById('tong3KySo').innerHTML = tong3KySo;
}

