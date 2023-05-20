// https://school.programmers.co.kr/learn/courses/30/lessons/12947

import Foundation

func solution(_ x:Int) -> Bool {
    let chrX: [Character] = Array(String(x))
    var num = 0
    for i in 0..<chrX.count{
        num += Int(String(chrX[i]))!
    }
    if x % num == 0{
        return true
    }else{
        return false
    }
}