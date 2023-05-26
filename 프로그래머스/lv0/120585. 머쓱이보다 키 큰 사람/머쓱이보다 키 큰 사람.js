function solution(array, height) {
    var answer = 0;
    array.forEach(element => {
        if(height < element) {
            answer += 1;
        }
    })
    return answer;
}