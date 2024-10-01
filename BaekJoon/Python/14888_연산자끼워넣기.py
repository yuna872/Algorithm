def perm(i, k):
    global minV, maxV

    if i == k:
        res = nums[0]
        for n in range(N-1):
            if p[n] == '+':
                res += nums[n+1]
            elif p[n] == '-':
                res -= nums[n+1]
            elif p[n] == '*':
                res *= nums[n+1]
            elif p[n] == '/':
                res = int(res/nums[n+1])

        if maxV < res:
            maxV = res

        if minV > res:
            minV = res
    else:
        for j in range(i, k):
            p[i], p[j] = p[j], p[i]
            perm(i+1, k)
            p[i], p[j] = p[j], p[i]


N = int(input())
nums = list(map(int, input().split()))
cnt = list(map(int, input().split()))
OP = ['+', '-', '*', '/']

p = []

for i in range(len(cnt)):
    for j in range(cnt[i]):
        p.append(OP[i])

maxV = -1e9
minV = 1e9

perm(0, N-1)

print(maxV)
print(minV)

