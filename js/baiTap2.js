//Event onchange : Ẩn hiện Input.

function eventChange() {
    var changeELE = document.getElementById("select").value;
    if (changeELE == "Doanh Nghiệp") {
        document.getElementById("Change").style.display = "block"
    } else {
        document.getElementById("Change").style.display = "none"
    }
}

/**
 * input:
 * + phiXLHoaDon_Dan
 * + phiDVCoBan_Dan
 * + phiKenh_Dan
 * 
 * + phiXLHoaDon_Nghiep
 * + phiKenh_DN
 * + phiDVCoBan_Nghiệp
 * + maKhachHang,
 * + soKenh,
 * + soKetNoi
 * 
 * Các bước xử lý
 * 
 * B1: tạo hàm tinhTienCap
 *      + lấy các giá trị từ form
 *      + kiểm tra loại khách hàng (Nhà dân , Doanh nghiệp, ngược lại chưa chọn loaik khách hàng).
 *      + nếu KH là Dân
 *          tienCap = phiXLHoaDon_Dan + phiDVCoBan_Dan + phiKenh_Dan * soKenh;
 *      + Nếu KH là Doanh Nghiệp
 *          Nếu soKetNoi < 0 => loại
 *          Ngược lại 
 *            Nếu soKetNoi <=10 
 *              tienCap = phiXLHoaDon_Nghiep + phiDVCoBan_Nghiệp + phiKenh_DN * soKenh;
 *            Ngược lại  
 *              tienCap = phiXLHoaDon_Nghiep + phiDVCoBan_Nghiệp + phiKenh_DN * soKenh + (soKetNoi -10 ) *5;
 *              
 *          
 * 
 * 
 * output: tienCap = 0;
 */


//! Bài làm

const phiXLHoaDon_Dan = 4.5;
const phiDVCoBan_Dan = 20.5;
const phiKenh_Dan = 7.5;


const phiXLHoaDon_Nghiep = 15;
const phiKenh_DN = 50;
const phiDVCoBan_Nghiệp = 75;

function tinhTienCap() {

    var selectELE = document.getElementById("select").value;
    var maKhachHang = document.getElementById("password").value;
    var soKenh = document.getElementById("kenhCaoCap").value;
    var soKetNoi = document.getElementById("ketNoi").value;

    var loaiKhachHang;

    loaiKhachHang = kiemTraKhachHang(selectELE);

    var tienCap = 0;

    switch (loaiKhachHang) {
        case "Nhà Dân":
            tienCap = tinhTien(phiXLHoaDon_Dan, phiDVCoBan_Dan, phiKenh_Dan,soKenh);

            break;
        case "Doanh Nghiệp":
            if (soKetNoi < 0) {
                alert("Số kết nối không đúng")
            } else {
                if (soKetNoi <= 10) {
                    tienCap = tinhTien(phiXLHoaDon_Nghiep, phiDVCoBan_Nghiệp, phiKenh_DN, soKenh) ;
                } else {
                    tienCap = tinhTien(phiXLHoaDon_Nghiep, phiDVCoBan_Nghiệp, phiKenh_DN, soKenh) + (soKetNoi - 10) * 5;
                }
            }
            break;

        default: alert("Hãy chọn loại khách hàng")
            break;
    }
    document.getElementById("txtTinhTienCap").innerHTML = "Mã khách hàng: " + maKhachHang + "<br> Tiền Cáp: " + "$" + tienCap.toFixed(2);
}

function kiemTraKhachHang(value1) {
    if (value1 == "Nhà dân") {
        return "Nhà Dân"

    } else if (value1 == "Doanh Nghiệp") {
        return "Doanh Nghiệp"
    } else {
        alert("Hãy chọn loại khách hàng")
    }
}

function tinhTien(phiXLHoaDon, phiDVCoBan, phiKenh, soKenh) {
    return (phiXLHoaDon + phiDVCoBan + phiKenh * soKenh)

}

