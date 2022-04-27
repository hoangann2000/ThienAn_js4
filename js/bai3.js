function chanLe() {
    var so1 = document.getElementById("so1").value;
    var so2 = document.getElementById("so2").value;
    var so3 = document.getElementById("so3").value;

    var soChan = 0;
    var soLe = 0;

    var mang = [so1, so2, so3];

    for (i = 0; i < mang.length ; i ++) {
        if(mang[i] % 2 == 0) {
            soChan += 1;
        }else {
            soLe += 1;
        }
    }
    
    txtResult3.innerHTML = soChan + " số chẵn </br>" + soLe + " số lẽ";
    txtResult3.classList.add("styleText");
}

