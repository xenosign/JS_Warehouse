// https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  let answer = 1;
  const clothesMap = new Map();

  for (const [name, type] of clothes) {
    if (clothesMap.has(type)) {
      clothesMap.set(type, clothesMap.get(type) + 1);
    } else {
      clothesMap.set(type, 1);
    }
  }

  for (const count of clothesMap.values()) {
    answer *= count + 1;
  }

  return answer - 1;
}

// const ex1 = [
//   ['yellow_hat', 'headgear'],
//   ['blue_sunglasses', 'eyewear'],
//   ['green_turban', 'headgear'],
// ];

// console.log(solution(ex1));

const ex2 = [
  ['a', 'A'],
  ['b', 'B'],
  ['c', 'C'],
];

console.log(solution(ex2));
