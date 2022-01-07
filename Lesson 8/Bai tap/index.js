// Bai 1

console.log("Bài 1: Nhập phép tính");

let operator = prompt("Hãy nhập phép tính bạn muốn thực hiện: +, -, *, /");
let first_number = Number(prompt("Hãy nhập vào số thứ nhất"));
let second_number = Number(prompt("Hãy nhập vào số thứ hai"));

function math(operator, first_number, second_number) {
  let result;
  if (operator === "*") {
    result = first_number * second_number;
    console.log("Đáp án: " + first_number + " * " + second_number + " = " + result);
  }
  if (operator === "/") {
    result = first_number / second_number;
    console.log("Đáp án: " + first_number + " / " + second_number + " = " + result);
  }
  if (operator === "+") {
    result = first_number + second_number;
    console.log("Đáp án: " + first_number + " + " + second_number + " = " + result);
  }
  if (operator === "-") {
    result = first_number - second_number;
    console.log("Đáp án: " + first_number + " - " + second_number + " = " + result);
  }
}
math(operator, first_number, second_number);

// Bai 2

console.log("Bài 2: Tìm số nguyên tố");

let numb = Number(prompt("Hãy nhập vào 1 số nguyên bất kỳ"));

function is_prime_number(numb) {
  let prime_number_status = true;

  if (numb < 2) {
    prime_number_status = false;
  }
  if (numb === 2) {
    prime_number_status = true;
  }
  if (numb > 2) {
    for (let index = 2; index < numb; index++) {
      if (numb % index === 0) {
        prime_number_status = false;
        break;
      }
    }
  }
  if (prime_number_status === true) {
    console.log("Bạn vừa nhập vào số " + numb +". Số " + numb + " là số nguyên tố");
  } else console.log("Bạn vừa nhập vào số " + numb +". Số " + numb + " không phải là số nguyên tố");
}

is_prime_number(numb);
