def find_set(x):
    while x != p[x]:
        x = p[x]
    return x

def union(x, y):
    px = find_set(x)
    py = find_set(y)
    p[py] = px


T = int(input())

for test_case in range(1, T+1):
    N, M = map(int, input().split())

    p = [i for i in range(N+1)]
    lst = list(map(int, input().split()))

    for i in range(0, len(lst), 2):
        minV = min(lst[i:i+2])
        maxV = max(lst[i:i+2])
        union(minV, maxV)

    # print(p)
    group = 0

    for i in range(1, N+1):
        if p[i] == i:
            group += 1

    print(f'#{test_case} {group}')
