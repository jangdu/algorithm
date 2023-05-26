function solution(s) {
  var nums = s.split(" ");
  nums = nums.map(Number);

  return `${Math.min(...nums)} ${Math.max(...nums)}`;
}