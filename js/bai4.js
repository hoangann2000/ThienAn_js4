function tamGiac() {
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);
   
    if (a<b+c && b<a+c && c<a+b) {
        if (a == b || b == c || a == c) {
            txtResult4.innerHTML = "Tam giác cân";
        }else if (a == b && a == c) {
            txtResult4.innerHTML = "Tam giác đều";
        }else if (a*a == b*b + c*c || b*b==a*a+c*c || c*c== a*a+b*b) {
            txtResult4.innerHTML = "Tam giác vuông";
        }else {
            txtResult4.innerHTML = "Tam giác thường";
        }
    }else {
        txtResult4.innerHTML = "Không phải tam giác";
    }

    txtResult4.classList.add("styleText");
}

