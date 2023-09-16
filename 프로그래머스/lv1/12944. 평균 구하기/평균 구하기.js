function solution(arr) {
    var answer = 0;
    
    arr.map((item) => {
        answer = item + answer
    })
    
    return (answer/arr.length);
}