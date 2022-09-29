import sys
sys.stdin = open('7465_input.txt', 'r')

def find_set(x):
    while p[x] != x:
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

    for _ in range(M):
        a, b = map(int, input().split())

        if a > b:
            union(a, b)
        else:
            union(b, a)

    cnt = 0
    for i in range(1, N+1):
        if p[i] == i:
            cnt += 1

    print(f'#{test_case} {cnt}')