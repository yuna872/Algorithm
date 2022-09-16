import sys
sys.stdin = open('2117_input.txt', 'r')

'''
시작점으로부터 집까지의 거리를 미리 계산 >> 집의 위치를 저장할 배열
'''
def find(i, j):
    global maxN

    dis = [0] * (2*N+1)
    for ni, nj in homes:
        # 시작지점으로부터 home까지의 거리를 계산하여 dis에 count
        t = abs(ni-i) + abs(nj-j)
        dis[t] += 1
    # print(dis)

    for k in range(1, 2*N+1):
        numH = sum(dis[:k])
        cost = numH*M - (k*k + (k-1)*(k-1))
        if cost >= 0 and maxN < numH:
            maxN = numH



T = int(input())
# T=1

for test_case in range(1, T+1):
    # 도시의 크기, 하나의 집이 지불할 수 있는 비용
    N, M = map(int, input().split())

    city = [list(map(int, input().split())) for _ in range(N)]
    homes = []

    for i in range(N):
        for j in range(N):
            if city[i][j] == 1:
                homes.append((i, j))

    maxN = 0
    for i in range(N):
        for j in range(N):
            # find에 시작점을보내
            find(i, j)

    print(f'#{test_case} {maxN}')

