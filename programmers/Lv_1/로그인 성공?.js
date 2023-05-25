//school.programmers.co.kr/learn/courses/30/lessons/120883?language=javascript

function solution(id_pw, db) {
  var answer = "";
  db.forEach((element, i) => {
    console.log(element);
    if (element[0] === id_pw[0]) {
      if (element[1] === id_pw[1]) {
        console.log(element);
        answer = "login";
      } else {
        answer = "wrong pw";
      }
    }
  });

  return answer === "" ? "fail" : answer;
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);
console.log(
  solution(
    ["rabbit04", "98761"],
    [
      ["jaja11", "98761"],
      ["krong0313", "29440"],
      ["rabbit00", "111333"],
    ]
  )
);
console.log(
  solution(
    ["programmer01", "15789"],
    [
      ["programmer02", "111111"],
      ["programmer00", "134"],
      ["programmer01", "1145"],
    ]
  )
);
