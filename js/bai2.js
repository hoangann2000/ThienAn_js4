function chaoHoi() {
    var thanhVien = document.getElementById("selectPercent").value;

    // console.log(thanhVien);
    switch (thanhVien) {
        case "Bố":
            txtResult2.innerHTML = "Xin chào : " + thanhVien;
            break;
        case "Mẹ":
            txtResult2.innerHTML = "Xin chào : " + thanhVien;
            break;
        case "Anh Trai":
            txtResult2.innerHTML = "Xin chào : " + thanhVien;
            break;
        case "Em Gái":
            txtResult2.innerHTML = "Xin chào : " + thanhVien;
            break;
        default:
            alert("Chưa chọn thành viên");
            break;
    }
     txtResult2.classList.add("styleText");
}

