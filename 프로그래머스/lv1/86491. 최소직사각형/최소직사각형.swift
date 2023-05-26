import Foundation

func solution(_ sizes:[[Int]]) -> Int {
    var moreLong: [Int] = []
    var moreShort: [Int] = []
    for i in sizes{
        if i[0] >= i[1] {
            moreLong.append(i[0])
            moreShort.append(i[1])
        }else{
            moreLong.append(i[1])
            moreShort.append(i[0])
        }
    }
    return moreLong.max()! * moreShort.max()!
}