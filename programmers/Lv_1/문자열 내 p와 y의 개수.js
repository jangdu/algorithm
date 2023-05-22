// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(s) {
  var answer = Boolean;
  var p = 0;
  var y = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      p += 1;
    } else if (s[i] === "y" || s[i] === "Y") {
      y += 1;
    }
  }

  return p === 0 && y === 0 ? true : p === y ? true : false;
}

console.log(solution("Pyy"));
