function addNow(callback) {
  const now = new Date();
  console.log(now);

  // 매개 변수로 전달 받은 함수 실행! 함수 이므로 (); 를 붙여서 실행
  callback();
}

addNow(function () {
  console.log('함수를 매번 새롭게 선언하지 않아도 되어서 난 행복해!');
});

setTimeout(function () {
  console.log('1초 뒤 실행되는 익명함수');
}, 1000);

// function printTetz() {
//   const now = new Date();
//   console.log(now);

//   console.log(name);
//   console.log(email);
//   console.log(address);
// }

// function printCha() {
//   const now = new Date();
//   console.log(now);

//   console.log(name2);
//   console.log(email2);
//   console.log(address2);
// }

// function printMin() {
//   const now = new Date();
//   console.log(now);

//   console.log(name3);
//   console.log(email3);
//   console.log(address3);
// }

// function printSomeOne(name, email, address) {
//   const now = new Date();
//   console.log(now);

//   console.log(name);
//   console.log(email);
//   console.log(address);
// }

// function calculate(a, b) {
//   const now = new Date();
//   console.log(now);

//   const result = a ** 2 + b ** 3 + a * b + a / b;
//   return result;
// }

// function testFunc() {
//   const now = new Date();
//   console.log(now);

//   // 코드 구현
// }

// function testFunc2() {
//   const now = new Date();
//   console.log(now);

//   // 코드 구현 2
// }
