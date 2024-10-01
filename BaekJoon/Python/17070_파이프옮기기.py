import sys
input = sys.stdin.readline


def dfs(i, j, status):
    global cnt

    if i == N - 1 and j == N - 1:
        cnt += 1
        return

    # 가로 방향 또는 대각선 방향일 때 가로 방향 파이프 놓기
    if status == 0 or status == 2:
        if j + 1 < N and arr[i][j + 1] == 0:
            dfs(i, j + 1, 0)

    # 세로 방향 또는 대각선 방향일 때 세로 방향 파이프 놓기
    if status == 1 or status == 2:
        if i + 1 < N and arr[i + 1][j] == 0:
            dfs(i + 1, j, 1)

    # 모든 방향에서 대각선 방향 파이프를 놓을 수 있음
    if i + 1 < N and j + 1 < N:
        if arr[i + 1][j] == 0 and arr[i][j + 1] == 0 and arr[i + 1][j + 1] == 0:
            dfs(i + 1, j + 1, 2)


N = int(input())

arr = [list(map(int, input().split())) for _ in range(N)]

cnt = 0
dfs(0, 1, 0)
print(cnt)

