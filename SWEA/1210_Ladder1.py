
ladder =[list(map(int,input().split())) for _ in range(100)]

row = 99
col = 99

while True:
    # 양 옆에 1을 만나면 방향 바꿔
    if 0 < col < 99:

        if row == 0:
            print(col)
            break

        if ladder[row][col-1] == 1 :
            while ladder[row][col-1] == 1 :
                col -= 1
        elif ladder[row][col+1] == 1:
            while ladder[row][col+1] == 1 :
                col += 1

    # 왼쪽 벽에 닿았을 때
    elif col == 0 :


    # 오른쪽 벽에 닿았을 때
    elif col == 99 :
    else: 
        row -= 1

    print(col)




