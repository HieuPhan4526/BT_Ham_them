/**
 * input:
 * hoTen
 * thuNhapNam
 * soNguoiPhuTHuoc
 * thueSuat60_Dau
 * thueSuatTren60_120
 * thueSuatTren120_210
 * thueSuatTren210_384
 * thueSuatTren384_624
 * thueSuatTren624_960
 * thueSuatTren_960,
 * 
 * các bước xử lý :
 *      B1: tạo các biến hằng số cost cho các giá trị thuế.
 *      B2: Tạo hàm tinhTienThue
 *          + lấy giá trị từ form
 *          + Tính thu nhập chịu thuế:
 *              + thuNhapChiuThue = thuNhapNam - 4tr - soNguoiPhuTHuoc * 1tr6;
 * 
 *          + Nếu thuNhapNam > 1tr && thuNhapNam <= 60tr:
 *              tinhThueTNCN = thuNhapChiuThue * thueSuat60_Dau
 *          + Nếu thuNhapNam > 60tr && thuNhapNam <= 120tr
 *              tinhThueTNCN = thuNhapChiuThue * (60tr * thueSuat60_Dau + (thuNhapNam - 60tr)* thueSuatTren60_120)
 *          + Nếu thuNhapNam > 120tr && thuNhapNam <= 210tr
 *              tinhThueTNCN = thuNhapChiuThue * (60tr * thueSuat60_Dau + 60tr * thueSuatTren60_120 + (thuNhapNam - 120tr) * thueSuatTren120_210)

 *          + Nếu thuNhapNam > 210tr && thuNhapNam <= 384tr
 *              tinhThueTNCN = thuNhapChiuThue * (60tr * thueSuat60_Dau + 60tr * thueSuatTren60_120 + 90tr * thueSuatTren120_210 + (thuNhapNam - 210tr) * thueSuatTren210_384)
 *          +  Nếu thuNhapNam > 384tr && thuNhapNam <= 624tr
 *              tinhThueTNCN = thuNhapChiuThue * (60tr * thueSuat60_Dau + 60tr * thueSuatTren60_120 + 90tr * thueSuatTren120_210 + 174tr * thueSuatTren210_384 + (thuNhapNam - 384tr) * thueSuatTren384_624) 
 *          + Nếu thuNhapNam > 624tr && thuNhapNam <= 960
 *              tinhThueTNCN = thuNhapChiuThue * (60tr * thueSuat60_Dau + 60tr * thueSuatTren60_120 + 90tr * thueSuatTren120_210 + 174tr * thueSuatTren210_384 + 240tr * thueSuatTren384_624 + (thuNhapNam - 624tr) * thueSuatTren624_960)
 *          + Nếu thuNhapNam > 960tr
 *              tinhThueTNCN = thuNhapChiuThue * (60tr * thueSuat60_Dau + 60tr * thueSuatTren60_120 + 90tr * thueSuatTren120_210 + 174tr * thueSuatTren210_384 + 240tr * thueSuatTren384_624 + 336tr * thueSuatTren624_960 + (thuNhapNam - 960tr) * thueSuatTren_960)
 * 
 * 
 * output: tinhThueTNCN = thuNhapChiuThue * thueSuat.
 */

//! bai lam


const thueSuat60_Dau = 0.05;
const thueSuatTren60_120 = 0.1;
const thueSuatTren120_210 = 0.15;
const thueSuatTren210_384 = 0.2;
const thueSuatTren384_624 = 0.25;
const thueSuatTren624_960 = 0.3;
const thueSuatTren_960 = 0.15;




function tinhTienThue() {
    var hoTen = document.getElementById("Name").value;
    var thuNhapNam = document.getElementById("num1").value;
    var soNguoiPhuThuoc = document.getElementById("num2").value;

    var thuNhapChiuThue = 0;
    var tinhThueTNCN = 0;
    thuNhapChiuThue = thuNhapNam - 4e+6 - soNguoiPhuThuoc * 1.6e+6;
    if (thuNhapChiuThue < 0) {
        alert("Tiền lương không đúng!")
        
    }else{
        tinhThueTNCN = tinhTien(thuNhapNam,thuNhapChiuThue ,thueSuat60_Dau,thueSuatTren60_120, thueSuatTren120_210, thueSuatTren210_384, thueSuatTren384_624, thueSuatTren624_960, thueSuatTren_960);
    }
    
   
    

    document.getElementById("txtTinhThue").innerHTML = "Họ Tên: " + hoTen +"<br> Thuế thu nhập cá nhân: " + Intl.NumberFormat().format(tinhThueTNCN);
    ;
}
function tinhTien(thuNam,thuChiuThue ,thueSuat60_begin,thueSuat60_ke, thueSuat90_Ke, thueSuat174_Ke, thueSuat240_Ke, thueSuat336_Ke, thueSuatConLai) {
    if (thuNam <= 60e+6) {
        return thuChiuThue * thueSuat60_begin
    }else if (thuNam <= 120e+6) {

        return  thuChiuThue * (60e+6 * thueSuat60_begin + (thuNam - 60e+6) * thueSuat60_ke);

    }else if(thuNam <= 210e+6){
        return thuChiuThue * (60e+6 * thueSuat60_begin + 60e+6 * thueSuat60_ke + (thuNam - 120e+6) * thueSuat90_Ke);
        
    }else if (thuNam <= 384e+6) {
        return thuChiuThue * (60e+6 * thueSuat60_begin + 60e+6 * thueSuat60_ke + 90e+6 * thueSuat90_Ke + (thuNam - 210e+6) * thueSuat174_Ke);

    }else if(thuNam <= 624e+6){
        return  thuChiuThue * (60e+6 * thueSuat60_begin + 60e+6 * thueSuat60_ke + 90e+6 * thueSuat90_Ke + 174e+6 * thueSuat174_Ke + (thuNam - 384e+6) * thueSuat240_Ke);

    }else if (thuNam <= 960e+6) {
        return  thuChiuThue * (60e+6 * thueSuat60_begin + 60e+6 * thueSuat60_ke + 90e+6 * thueSuat90_Ke + 174e+6 * thueSuat174_Ke + 240e+6 * thueSuat240_Ke + (thuNam - 624e+6) * thueSuat336_Ke);
        
    }else {
        return thuChiuThue * (60e+6 * thueSuat60_begin + 60e+6 * thueSuat60_ke + 90e+6 * thueSuat90_Ke + 174e+6 * thueSuat174_Ke + 240e+6 * thueSuat240_Ke + 336e+6 * thueSuat336_Ke + (thuNam - 960e+6) * thueSuatConLai);
    }
    
}