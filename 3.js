alert("Change code Javascript to Jquery");
$(document).ready(function () {
    $("#btn1").click(function () {
        var str = $("#t1").val();
        for (i = 0; i < str.length; i++) {
            if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
                || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
                alert("Left most vowel of " + str + " is at location " + (i + 1));
                return;
            }
        }
        alert("No vowels found for string " + str);
    });

    $("#btn2").click(function () {
        num = $("#t2").val();
        rnum = 0;
        temp = num;
        if (isNaN(num)) {
            alert("invalid number");
            return;
        }
        while (num != 0) {
            rnum *= 10;
            rnum += num % 10;
            num -= num % 10;
            num = Math.floor(num / 10);
        }
        alert("Reverse of num " + temp + " is " + rnum);
    })
});

function f(d) {
    if (d == 'c') {
        $("#res").val("");
        return;
    }
    res = $("#res").val();
    if (res == 0 && d == 0)
        return;
    if (d == '+' || d == '-' || d == '*' || d == '/') {
        opr = d;
        num = parseFloat(res);
        $("#res").val(d);
        return;
    }
    if (d == '=') {
        num1 = parseFloat(res);
        switch (opr) {
            case '+': ans = num + num1; break;
            case '-': ans = num - num1; break;
            case '*': ans = num * num1; break;// Hàm thực hiện các phép toán
            case '/': ans = parseInt(num / num1); break;
        }
        $("#res").val(ans);
        return;
    }
    if (d == '--') {
        temp = $("#res").val();
        temp *= -1;
        $("#res").val(temp);
        return;
    }

    if (!isNaN(document.getElementById('res').value)) {
        temp = $("#res").val();
        temp += d;
        $("#res").val(temp);
        return;
    }
    else {
        temp = $("#res").val(d);
    }
}