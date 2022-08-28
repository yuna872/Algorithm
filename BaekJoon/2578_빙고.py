player = [list(map(int, input().split())) for _ in range(5)]

# 사회자가 불러주는 번호 저장할 배열
nums = []
for i in range(5):
    nums += list(map(int, input().split()))

cnt = 0
# 번호 하나씩 불러
while cnt < 25:

    # 사회자가 불러주는 번호 체크하기
    for i in range(5):
        for j in range(5):
            if nums[cnt] == player[i][j]:
                player[i][j] = 0
    cnt += 1

    # 빙고 여부 체크하기
    bingo = 0
    # 가로
    for i in range(5):
        if sum(player[i]) == 0:
            bingo += 1
    # 세로
    for i in range(5):
        tmp = 0
        for j in range(5):
            tmp += player[j][i]
        if tmp == 0:
            bingo += 1

    # 대각선 1
    tmp1 = 0
    tmp2 = 0
    for i in range(5):
        tmp1 += player[i][i]
        tmp2 += player[i][5-i-1]

    if tmp1 == 0:
        bingo += 1
    if tmp2 == 0:
        bingo += 1

    if bingo >= 3:
        break

print(cnt)