import sys
sys.stdin = open("input.txt","r")

for test_case in range(1, 11):
    t = int(input())

    # 사다리 입력 받기
    ladder = [list(map(int, input().split())) for _ in range(100)]

    # 오른쪽, 왼쪽, 위 방향 순서대로
    dx = [0, 0, -1]
    dy = [1, -1, 0]

    # 처음 시작하는 점 찾기
    for i in range(100):
        if ladder[99][i] == 2:
            col = i

    #오왼위 순서대로 찔러보고 1이면 이동해,,,벽에 닿았을 때는 달라져야함,,,,
    row = 99
    while row > 0:
        for d in range(3):
            if 0 <= row + dx[d] <= 99 and 0 <= col + dy[d] <= 99:
                if ladder[row+ dx[d]][col + dy[d]] == 1:
                    # 지나온 자리는 2로 변경
                    ladder[row][col] = 2
                    row = row + dx[d]
                    col = col + dy[d]

    print(f'#{test_case} {col}')








