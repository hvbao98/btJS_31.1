// Lấy giá trị từ các ô input dựa trên ID

function Summation() {
  var number_A = parseFloat(document.getElementById("numberA").value);
  var number_B = parseFloat(document.getElementById("numberB").value);
  // Thực hiện phép cộng
  var sum = number_A + number_B;
  // Hiển thị kết quả
  document.getElementById("result").value = sum;
}
function Subtraction() {
  var number_A = parseFloat(document.getElementById("numberA").value);
  var number_B = parseFloat(document.getElementById("numberB").value);
  var Sub = number_A - number_B;
  document.getElementById("result").value = Sub;
}
function Mutiplication() {
  var number_A = parseFloat(document.getElementById("numberA").value);
  var number_B = parseFloat(document.getElementById("numberB").value);
  var Mut = number_A * number_B;
  document.getElementById("result").value = Mut;
}
function Division() {
  var number_A = parseFloat(document.getElementById("numberA").value);
  var number_B = parseFloat(document.getElementById("numberB").value);
  var Div = number_A / number_B;
  document.getElementById("result").value = Div;
}
