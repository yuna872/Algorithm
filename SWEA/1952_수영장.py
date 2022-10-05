import sys
sys.stdin = open('1952_input.txt', 'r')

def pay(k, midSum):
    global minV

    if k >= 12:
        if minV > midSum:
            # 1년 이용권으로 끊었을 때와 비교 해주기
            minV = min(midSum, cost[3])
        return

    pay(k + 1, midSum + min(plan[k]*cost[0], cost[1]))
    pay(k + 3, midSum + cost[2])


T = int(input())


for test_case in range(1, T+1):
    cost = list(map(int, input().split()))
    plan = list(map(int, input().split()))

    minV = 999999

    pay(0, 0)
    print(f'#{test_case} {minV}')

