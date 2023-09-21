// n미터 벽, 벽에 <- 포스터 게시
// 벗겨진 벽에 페인트 (1 ~ n)
// 롤러 m미터


function solution(n, m, section) {
  let answer = 0;
    
  let grid = 0;
    
  section.forEach((item) => {
    if (item > grid) {
      answer++;
      grid = item + m - 1;
    }
  });
  return answer;
}