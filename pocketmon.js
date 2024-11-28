// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  let answer = 0;

  const uniquePocketmons = new Set(nums);
  const maxPocketmons = nums.length / 2;

  if (uniquePocketmons.size > maxPocketmons) {
    answer = maxPocketmons;
  } else {
    answer = uniquePocketmons.size;
  }

  return answer;
}

const ex1 = [3, 1, 2, 3];
const ex2 = [3, 3, 3, 2, 2, 4];
const ex3 = [3, 3, 3, 2, 2, 2];

console.log(solution(ex1));
console.log(solution(ex2));
console.log(solution(ex3));
