// Bài 1 này em làm theo cách cho vào mảng rồi xếp
function sapXep() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;

    var numbers = [num1,num2,num3];
    numbers.sort(function(a,b) {
        return a-b;
    })

    txtResult1.innerHTML = "Sắp xếp tăng dần : " + numbers;
    txtResult1.classList.add("styleText");
}

