import sys
sys.stdin = open('11315_input.txt', 'r')

T = int(input())

def omok():
    for i in range(N):
        for j in range(N):
            # 돌을 발견하면
            if arr[i][j] == 'o':
                for di, dj in d:
                    ni, nj = i + di, j + dj
                    cnt = 1
                    # 주변에 돌을 발견하면 현재 델타 그대로 돌이 나오지 않을 때까지 조회하면서 카운트
                    while 0 <= ni < N and 0 <= nj < N and arr[ni][nj] == 'o':
                        ni += di
                        nj += dj
                        cnt += 1

                    # 다섯개 이상 연속한 부분이 있으면 True
                    if cnt >= 5:
                        return True
    return False

for test_case in range(1, T+1):
    N = int(input())

    arr = [list(input()) for _ in range(N)]
    d = [[0, 1], [1, 0], [1, 1], [1, -1]]

    if omok():
        print(f'#{test_case} YES')
    else:
        print(f'#{test_case} NO')





