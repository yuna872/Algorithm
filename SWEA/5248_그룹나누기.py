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
        minV = min(lst[i], lst[i+1])
        maxV = max(lst[i], lst[i+1])
        union(minV, maxV)

    # print(p)
    group = set()

    for i in p[1:]:
        group.add(i)

    print(f'#{test_case} {len(group)}')
