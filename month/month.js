function result() {
    var month = parseInt(document.getElementById("value").value);
    switch (month) {
        case 2:
            document.getElementById("kq").innerText = "Tháng 2 có 28 hoặc 29 ngày";
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("kq").innerText = "Tháng "+month+" có 31 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("kq").innerText = "Tháng "+month+" có 30 ngày";
            break;

    }
}