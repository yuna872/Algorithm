T = int(input())

for test_case in range(1, T+1):
    # N : 구슬을 쏠 수 있는 횟수, W x H 배열
    N, W, H = map(int, input().split())

    arr = [list(map(int, input().split())) for _ in range(H)]



