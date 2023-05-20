// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  var nums = s.split(" ");
  nums = nums.map(Number);

  return `${Math.min(...nums)} ${Math.max(...nums)}`;
}
