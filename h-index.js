// https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  let answer = 0;

  const sortedArr = citations.sort((a, b) => a - b);
  let arrLen = sortedArr.length;

  for (let i = 0; i < sortedArr.length; i++) {
    answer = arrLen - i;
    if (sortedArr[i] >= answer) return answer;
  }

  return answer;
}

const ex1 = [3, 0, 6, 1, 5];
const ex2 = [0, 5, 6, 7, 8];
console.log(solution(ex1)); // 3
console.log(solution(ex2)); // 4
