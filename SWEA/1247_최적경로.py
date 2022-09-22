import sys
sys.stdin = open('1247_input.txt', 'r')

# n >> 선택된 원소의 개수, k >> 순열의 길이
def perm(n, k, midSum):
    global minV

    if n == k:
        # 도착했으면 집으로 가기
        midSum += abs(p[n-1][0] - home[0]) + abs(p[n-1][1] - home[1])
        if minV > midSum:
            minV = midSum
            return

    else:
        for i in range(n, k):

            p[n], p[i] = p[i], p[n]
            if n >= 1:
                dis = abs(p[n][0] - p[n-1][0]) + abs(p[n][1] - p[n-1][1])

                # 이미 최소값보다 크면 리턴
                if minV < midSum + dis:
                    # 그래도 이건 복원 시켜주고가
                    p[n], p[i] = p[i], p[n]
                    return

                perm(n+1, k, midSum + dis)
            else:
                # 첫번째 집으로 갈때는 회사에서 출발하자
                dis = abs(p[n][0] - company[0]) + abs(p[n][1] - company[1])

                if minV < midSum + dis:
                    p[n], p[i] = p[i], p[n]
                    return

                perm(n+1, k, midSum + dis)

            p[n], p[i] = p[i], p[n]



T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    inputV = list(map(int, input().split()))
    p = []
    minV = 999999999999

    company = (inputV[0], inputV[1])
    home = (inputV[2], inputV[3])

    for i in range(4, len(inputV), 2):
        p.append((inputV[i], inputV[i+1]))

    perm(0, N, 0)
    print(f'#{test_case} {minV}')





