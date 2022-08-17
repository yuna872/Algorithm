board = [list(map(int,input().split())) for _ in range(5)]

dy = [-1, 1, 0, 0, 1, 1, -1, -1]
dx = [0, 0, -1, 1, 1, -1, 1, -1]

result = True
for y in range(5):
    for x in range(4):
        # 해당 원소가 1이면 주변 검사
        if board[y][x] == 1:
            # 방향 바꿔가며
            for d in range(8):
                if 0 <= y+dy[d] < 5 and 0 <= x+dx[d] < 4 and board[y+dy[d]][x+dx[d]] == 1:
                    # 주변에 1이 있으면 False로
                    result = False

if result == False:
    print('불안정한 상태')
else:
    print('안정된 상태')


