import Foundation

func solution(_ lottos:[Int], _ win_nums:[Int]) -> [Int] {
    var (count,howCurrectNumber) = (0,0)
    
    for i in 0...5{
        if(lottos[i] == 0){
            count += 1
        }
        for j in 0...5{
            if(lottos[i] == win_nums[j]){
                howCurrectNumber += 1
            }
        }
    }
    
    
    var best = 0
    var worst = 0
    
    switch howCurrectNumber {
    case 6: worst = 1
    case 5: worst = 2
    case 4: worst = 3
    case 3: worst = 4
    case 2: worst = 5
    default: worst = 6
    }
    switch howCurrectNumber + count {
    case 6: best = 1
    case 5: best = 2
    case 4: best = 3
    case 3: best = 4
    case 2: best = 5
    default: best = 6
    }
    
    return [best, worst]
}