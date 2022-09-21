T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    arr = [list(map(int, input().split())) for _ in range(N)]

    d = [(0, 1), (1, 0)]