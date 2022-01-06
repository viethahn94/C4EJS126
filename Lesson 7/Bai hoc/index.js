// Bai 1
let full_name = prompt("Hay nhap ho va ten")
console.log("Xin chao " + full_name);

// Bai 2
let firstNumber = Number(prompt("Hay nhap vao so thu nhat"))
let secondNumber = Number(prompt("Hay nhap vao so thu hai"))
let thirdNumber = Number(prompt("Hay nhap vao so thu ba"))

let total = firstNumber + secondNumber + thirdNumber

console.log("Tổng ba số là: " + total);

// Bai 3
let canh_1 = Number(prompt("Hay nhap vao gia tri canh goc vong thu nhat"))
let canh_2 = Number(prompt("Hay nhap vao gia tri canh goc vong thu hai"))

let canh_huyen = Math.sqrt(canh_1*canh_1 + canh_2*canh_2)

console.log("Gia tri cua canh huyen la: " + canh_huyen);

// Bai 4

let chieu_dai = Number(prompt("Hay nhap vao gia tri chieu dai cua hinh chu nhat"))
let chieu_rong = Number(prompt("Hay nhap vao gia tri chieu rong cua hinh chu nhat"))

let chu_vi = (chieu_dai + chieu_rong) *2
let dien_tich = chieu_rong * chieu_dai

console.log("Chu vi cua hinh chu nhat la: " + chu_vi);
console.log("Dien tich cua hinh chu nhat la: " + dien_tich);






