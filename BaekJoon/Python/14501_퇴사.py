def solve(profit, depth):
    global maxV

    if depth > N:
        return

    if depth == N:
        if profit > maxV:
            maxV = profit

    else:
        # 해당 날짜를 포함하거나
        solve(profit+P[depth], depth+T[depth])
        # 포함하지 않거나
        solve(profit, depth + 1)


N = int(input())

T = []
P = []

for _ in range(N):
    t, p = map(int, input().split())

    T.append(t)
    P.append(p)

maxV = 0
solve(0, 0)
print(maxV)