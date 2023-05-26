N, K = map(int, input().split())

knapsack = [[0 for _ in range(K+1)] for _ in range(N+1)]
items = [[0, 0]]

for i in range(N):
    items.append(list(map(int, input().split())))

# i\j  0   1   2   3   4   5    6    7
#  0  [0] [0] [0] [0] [0] [0]  [0]  [0]
#  1  [0] [0] [0] [0] [0] [0]  [13] [13]
#  2  [0] [0] [0] [0] [8] [8]  [13] [13]
#  3  [0] [0] [0] [6] [8] [8]  [13] [13]
#  4  [0] [0] [0] [6] [8] [12] [13] [13]

for i in range(1, N+1):          # i = 1 ~ 5
    for j in range(1, K+1):      # j = 1 ~ 8
        W = items[i][0]       # 6   4  3   5
        V = items[i][1]       # 13  8  6  12

        if j >= W:
            knapsack[i][j] = max(V + knapsack[i - 1][j - W], knapsack[i - 1][j])
            # knapsack[i][j] = V if V > knapsack[i - 1][j] else knapsack[i - 1][j]
        else:
            knapsack[i][j] = knapsack[i - 1][j]

print(knapsack[N][K])
