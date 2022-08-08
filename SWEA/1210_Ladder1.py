ladder =[list(map(int,input().split())) for _ in range(100)]
past = []

row = 99
col = 99

while True :
    if row == 0:
        print(col)
        break
    
    # 열 번호가 1~98 일때 양 옆이 1이면 방향 전환
    if 0 < col < 99:
        # 왼쪽 방향
        if ladder[row][col-1] == 1:
            while ladder[row][col-1] == 1 :
                col -= 1
        # 오른쪽 방향
        elif ladder[row][col+1] == 1 :
            while ladder[row][col+1] == 1 :
                col += 1
        # 아니면 row를 마이너스
        else :
            if(row > 0):
                row -= 1
    # 열 번호가 0 이거나 99인 경우
    else:
        if col == 0 :
            while ladder[row][col+1]==0 and row > 0:
                row -= 1

        elif col == 99 :
            while ladder[row][col-1]==0 and row > 0:
                row -= 1




# for row in range(100):
#     for col in range(100):
#         if ladder[row][col] != 1 :
#             if col in stick :
#                 stick.remove(col)

# stick_idx = len(stick)-1
# x = 99
# # 막대 찾음,,, 이제 시작
# while True : 
#     y = stick[stick_idx]

#     while(x > 0):
#         if 0 < y < 99:

    
    # 맨윗줄에 닿으면 프린트하고 나와
    # if 0 < y < 99:

    #         if(ladder[x][y-1] == 1):
    #             stick_idx -= 1
            
    # else:
    #     if y == 0:
    #     elif y == 99:
