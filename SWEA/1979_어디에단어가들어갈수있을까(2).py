import sys
sys.stdin = open('1979_input.txt', 'r')

T = int(input())

for test_case in range(1, T+1):
    N, K = map(int, input().split())

    arr = [list(map(int, input().split())) for _ in range(N)]
    result = 0

    # 가로방향
    for y in range(N):
        x = 0
        while x < N:
            # 값이 0인 동안 x좌표 1칸씩 이동하기
            while x < N and arr[y][x] != 1:
                x += 1

            cnt_one = 0
            # 값이 1인 동안 1의 개수 세면서 이동하기
            while x < N and arr[y][x] != 0:
                x += 1
                cnt_one += 1

            # 1을 다 셌을 때 K와 같으면 result +1
            if cnt_one == K:
                result += 1
            # 아직 벽에 안닿았으면 continue
            else:
                continue

    # 세로방향
    for x in range(N):
        y = 0
        while y < N:
            # 값이 0인 동안 x좌표 1칸씩 이동하기
            while y < N and arr[y][x] != 1:
                y += 1

            cnt_one = 0
            # 값이 1인 동안 1의 개수 세면서 이동하기
            while y < N and arr[y][x] != 0:
                y += 1
                cnt_one += 1

            # 1을 다 셌을 때 K와 같으면 result +1
            if cnt_one == K:
                result += 1
            # 아직 벽에 안닿았으면 continue
            else:
                continue
    print(f'#{test_case} {result}')







