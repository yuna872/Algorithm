import sys
sys.stdin = open('2115_input.txt', 'r')

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
            honey.sort(reverse=True)
            # print(i, j)
        j += 1
        tmp += 1


    par(0)
    # 채취할 수 있는 꿀의 양이 제한되어 있음
    real_honey = 0
    for h in honey:
        if (h + real_honey) <= C:
            # 꿀 채취하기
            real_honey += h
            # 수익
            profit += h ** 2

    # 다음 일꾼 꿀 모으러 가기
    for ni in range(N):
        for nj in range(N):
            if not visited[ni][nj]:
                solve(ni, nj, profit, k+1)

def getHoney(midSum)



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
