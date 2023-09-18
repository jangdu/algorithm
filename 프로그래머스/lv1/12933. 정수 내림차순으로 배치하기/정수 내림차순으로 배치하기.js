function solution(n) {
    var answer = 0;
    const t = Array.from(String(n));
    
    t.sort((a, b) => b - a);
    
    return parseInt(t.join(''));;
}