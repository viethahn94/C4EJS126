// Bài 1

console.log("Bài 1");
let age = Number(prompt("Hãy nhập số tuổi của bạn"));
function checkAge(age) {
  if (age >= 18) {
    alert("Bạn đủ tuổi hẹn hò. Quẩy thôi.");
  } else alert("Bạn chưa đủ tuổi hẹn hò. Ở nhà học bài đi pé");
}

checkAge(age);

// Bài 2

console.log("Bài 2");

let number_1 = Number(prompt("Hãy nhập vào số thứ nhất"));
let number_2 = Number(prompt("Hãy nhập vào số thứ hai"));
let number_3 = Number(prompt("Hãy nhập vào số thứ ba"));

function checkNumber(a, b, c) {
  if (a > b) {
    if (a > c) {
      alert("Số lớn nhất là " + a);
    }
  }

  if (b > a) {
    if (b > c) {
      alert("Số lớn nhất là " + b);
    }
  }
  if (c > a) {
    if (c > b) {
      alert("Số lớn nhất là " + c);
    }
  }
}

checkNumber(number_1, number_2, number_3);

// Bài 3

console.log("Bài 3");

let clothes = ["T-shirt", "Shirt", "Jean"];

let command = prompt(
  "Hãy nhập hành động bạn muốn làm: create, update, read, delete, no"
);

function checkCommand(command, clothes) {
  let position;
  if (command === "read") {
    console.log(clothes);
  }
  if (command === "create") {
    clothes.push(prompt("Hãy nhập tên quần áo bạn muốn thêm"));
    console.log(clothes);
  }
  if (command === "update") {
    position = Number(prompt("Hãy nhập vào vị trí bạn muốn thay đổi"));
    clothes[position] = prompt("Hãy nhập tên loại quần áo bạn muốn đổi sang");
    console.log(clothes);
  }
  if (command === "delete") {
    position = Number(prompt("Hãy nhập vào vị trí bạn muốn xóa"));
    clothes.splice(position, 1);
    console.log(clothes);
  }
  if (command === "no") {
    alert("Kết thúc chương trình");
  }
}

checkCommand(command, clothes);
