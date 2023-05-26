import Foundation

func solution(_ s:String) -> Int {
    var result = s
    let numAl = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    for i in 0...9{
        result = result.replacingOccurrences(of: numAl[i], with: String(i))
    }
    
    return Int(result)!
}