import sys
sys.stdin = open('5188_input.txt', 'r')

def solve(i, j):
    global minV

    if i == N-1 and j == N-1:
        if arr[i][j] < minV:
            minV = arr[i][j]
            return
    # 현재까지의 수의 합이 이미 최소값을 넘어가면 탐색 그만
    elif arr[i][j] > minV:
        return
    else:
        # 오른쪽과 아래방향으로만 탐색
        for di, dj in [(0, 1), (1, 0)]:
            if 0 <= i + di < N and 0 <= j + dj < N:
                arr[i+di][j+dj] += arr[i][j]
                solve(i+di, j+dj)
                # 다른 경로로 탐색 되었을때를 대비해서 흔적을 지워준다
                arr[i + di][j + dj] -= arr[i][j]


T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    arr = [list(map(int, input().split())) for _ in range(N)]

    minV = 999999

    solve(0, 0)

    print(f'#{test_case} {minV}')

