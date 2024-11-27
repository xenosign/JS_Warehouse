// https://school.programmers.co.kr/learn/courses/30/lessons/131701?language=javascript

function solution(elements) {
  const doubleLenElements = [...elements, ...elements];
  const set = new Set();

  for (let i = 0; i < elements.length; i++) {
    for (let j = 1; j <= elements.length; j++) {
      const slice = doubleLenElements.slice(i, i + j);

      const sum = slice.reduce((acc, cur) => acc + cur, 0);
      set.add(sum);
    }
  }

  return set.size;
}

const ex1 = [7, 9, 1, 1, 4];
console.log(solution(ex1));
