declareFunc(); // 함수가 선언되기 전에 사용하여도 문제 X

function declareFunc() {
  console.log('어디에서든 호출 가능');
}

representFunc(); // 함수가 선언되기 전에 사용하여 에러가 발생

const representFunc = function () {
  console.log('선언을 해야만 사용 가능');
};
