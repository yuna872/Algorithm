N = int(input())

pairs = [[0, 5], [1, 3], [2, 4]]
ans = 0

for n in range(N):
    dice = list(map(int, input().split()))

    minV = 999
    for a, b in pairs:
        if minV > dice[a] + dice[b]:
            minV = dice[a] + dice[b]

    print(minV)
    print(sum(dice) - minV)
    ans += sum(dice) - minV

print(ans)