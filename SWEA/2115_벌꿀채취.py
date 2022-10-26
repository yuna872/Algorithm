import sys
sys.stdin = open('2115_input.txt', 'r')

def dfs(idx, sumV, total, honey):
    global maxP
    if sumV > C:
        return

    if i == M:
        maxP = max(maxV, total)
        return

    # 꿀을 채취할 수 있는 조건이면 채취하거나
    dfs(idx+1, sumV+honey[idx], total+honey[idx]**2, honey)
    # 채취하지 않거나
    dfs(idx+1, sumV, total, honey)

def solve(i, j, profit, k):
    global maxV

    # 두번째 일꾼까지 탐색을 마치면
    if k == 2:
        # 최대 수익 갱신
        if maxV < profit:
            maxV = profit
            # print(visited)
        return

    if profit + (big**2) * (2*M) < maxV:
        return

    # 꿀 수확하기
    tmp = 0
    honey = []
    while tmp < M:
        if 0 <= i < N and 0 <= j < N and not visited[i][j]:
            # 방문처리 해주기
            visited[i][j] = 1
            honey.append(arr[i][j])

        j += 1
        tmp += 1

    maxP = 0
    dfs(0, 0, 0, honey)

    # 다음 일꾼 꿀 모으러 가기
    for ni in range(N):
        for nj in range(N):
            if not visited[ni][nj]:
                solve(ni, nj, profit+maxP, k+1)


T = int(input())

for test_case in range(1, T+1):
    N, M, C = map(int, input().split())

    arr = [list(map(int, input().split())) for _ in range(N)]

    big = 0
    for i in range(N):
        big = max(big, max(arr[i]))

    maxV = 0

    for i in range(N):
        for j in range(N):

            visited = [[0] * N for _ in range(N)]
            solve(i, j, 0, 0)

    print(f'#{test_case} {maxV}')
