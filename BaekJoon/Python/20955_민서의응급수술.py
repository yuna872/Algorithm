def findset(x):
    if x == p[x]:
        return x
    return findset(p[x])

def union(x, y):
    px = findset(x)
    py = findset(y)

    p[py] = px

def solve():
    ans = 0
    for j in range(1, N + 1):
        for k in range(1, N + 1):
            if findset(j) != findset(k):
                union(j, k)
                ans += 1

            cnt = 0
            for i in range(1, N + 1):
                if p[i] == i:
                    cnt += 1
            if cnt == 1:
                return ans

N, M = map(int, input().split())

# set의 정보
p = [i for i in range(N+1)]

for _ in range(M):
    u, v = map(int, input().split())

    union(u, v)

ans = solve()
print(ans)

