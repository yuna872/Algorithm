import sys
sys.stdin = open('1486_input.txt', 'r')

def par(k, curSum):
    global minV
    if curSum >= minV:
        return

    if k == N:
        if curSum >= B and minV >= curSum:
            if curSum < minV:
                minV = curSum
        return
    else:
        result[k] = 0
        par(k+1, curSum)

        result[k] = 1
        par(k+1, curSum+heights[k])

T = int(input())

for test_case in range(1, T+1):
    N, B = map(int, input().split())

    heights = list(map(int, input().split()))
    result = [0] * N

    minV = 9999999999

    par(0,0)

    print(f'#{test_case} {minV-B}')