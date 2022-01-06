// Bai 1

console.log("Bài 1");

const so_pi = Math.PI;
let duong_kinh = Number(prompt("Hãy nhập vào đường kính"));

function chu_vi_hinh_tron(duong_kinh, so_pi) {
  let chu_vi_hinh_tron = duong_kinh * so_pi;
  console.log("Chu vi hình tròn là: " + chu_vi_hinh_tron);
}

function dien_tich_hinh_tron(duong_kinh, so_pi) {
  let dien_tich_hinh_tron = ((duong_kinh * duong_kinh) / 4) * so_pi;
  console.log("Diện tích hình tròn là: " + dien_tich_hinh_tron);
}

chu_vi_hinh_tron(duong_kinh, so_pi);
dien_tich_hinh_tron(duong_kinh, so_pi);

// Bai 2

console.log("Bài 2");

let full_name = prompt("Hãy nhập vào họ và tên");

function length_of_name(full_name) {
  console.log("Độ dài tên của bạn là " + full_name.length);
}

function change_name_to_uppercase(full_name) {
  console.log("Tên của bạn viết hoa là " + full_name.toUpperCase());
}

length_of_name(full_name);
change_name_to_uppercase(full_name);

// Bai 3

console.log("Bài 3");

let password = prompt("Hãy nhập vào password");
function check_valid_password(password) {
  if (password.length >= 8) {
    console.log("Password của bạn hợp lệ");
  } else console.log("Password của bạn không hợp lệ");
}

check_valid_password(password);

// Bai 4

console.log("Bài 4");

let month = Number(prompt("Hãy nhập tháng trong năm"));

function check_season(month) {
  if (month == 1 || month == 2 || month == 3) {
    console.log("Tháng bạn nhập là mùa Xuân");
  }
  if (month == 4 || month == 5 || month == 6) {
    console.log("Tháng bạn nhập là mùa Hạ");
  }
  if (month == 7 || month == 8 || month == 9) {
    console.log("Tháng bạn nhập là mùa Thu");
  }
  if (month == 10 || month == 11 || month == 12) {
    console.log("Tháng bạn nhập là mùa Đông");
  }
  if (month > 12) {
    console.log("Bạn đang nhập sai giá trị tháng");
  }
}

check_season(month);

// Bai 5
console.log("Bài 5");

let canh_1 = Number(prompt("Hãy nhập vào giá trị của cạnh 1"));
let canh_2 = Number(prompt("Hãy nhập vào giá trị của cạnh 2"));
let canh_3 = Number(prompt("Hãy nhập vào giá trị của cạnh 3"));

function is_triangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    console.log("Ba cạnh bạn nhập là hình tam giác");
  } else console.log("Ba cạnh bạn nhập không phải là hình tam giác");
}

is_triangle(canh_1, canh_2, canh_3);
