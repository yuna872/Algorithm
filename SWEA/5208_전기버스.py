import sys
sys.stdin = open('5208_input.txt', 'r')

'''
fuel : 현재 충전지 용량
now : 현재 위치한 정류장
cnt : 지금까지의 충전 횟수
'''
def dfs(fuel, now, cnt):
    global minV

    # 만약에 정류장의 끝까지 갔다면
    if now == N-1:
        if cnt < minV:
            minV = cnt
        return

    # 연료가 다 떨어져서 더이상 움직일 수 없거나 cnt가 이미 minV보다 큰 경우
    if fuel == 0 or minV <= cnt:
        return

    # 충전을 안하고 가느냐
    dfs(fuel - 1, now + 1, cnt)
    # 충전을 하고 가느냐
    # 범위 안에 들어와 있으면
    if now+1 < N-1:
        dfs(M[now+1], now + 1, cnt + 1)

    return


T = int(input())

for test_case in range(1, T+1):
    lst = list(map(int, input().split()))

    N = lst[0]
    M = lst[1:]

    minV = 1_000_000

    # 첫번째 정류장에서 충전 하고가기
    dfs(M[0], 0, 0)
    print(f'#{test_case} {minV}')








