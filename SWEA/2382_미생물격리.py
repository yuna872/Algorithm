import sys
sys.stdin = open('2382_input.txt', 'r')

d_dict = {
    1 : (-1, 0),
    2 : (1, 0),
    3 : (0, -1),
    4 : (0, 1)
}

T = int(input())

for test_case in range(1, T+1):
    '''
    N*N의 셀들, 가장 바깥쪽은 약품이 뭍어있음
    M 시간 후 남아있는 미생물 수의 총합 구하기
    '''
    N, M, K = map(int, input().split())

    cells =[]

    for k in range(K):
        cells.append(list(map(int, input().split())))
    # print(cells)

    # M 시간만큼 반복하기
    for m in range(M):
        # 3차원 배열에 미생물들 움직임 저장
        posiLst = [[[] for _ in range(N)] for _ in range(N)]

        # 셀 하나씩 이동 시키기
        for i in range(len(cells)):
            # 미생물 수가 있을 때에만 수행하기
            # 이 조건 없으면 안돼,,,ㅎ,, 도대체,,왜,,
            if cells[i][2] > 0:
                # 이동 방향
                di, dj = d_dict[cells[i][3]]

                # 이동하기
                cells[i][0] += di
                cells[i][1] += dj

                # 현재 위치
                curi, curj = cells[i][0], cells[i][1]

                # 약품이 발라진 영역에 머무르는 경우
                if curi == 0 or curj == 0 or curi == N-1 or curj == N-1:
                    # 방향을 바꾸고
                    cells[i][3] = cells[i][3] - 1 if cells[i][3] % 2 == 0 else cells[i][3] + 1

                    # 개체 수는 절반으로
                    cells[i][2] //= 2

                # 3차원 리스트에 저장
                posiLst[curi][curj].append(cells[i])

        for r in range(N):
            for c in range(N):
                # 리스트가 존재하는 경우
                if posiLst[r][c] != []:

                    # 개체 수의 합을 구하면서 가장 많은 개체수의 방향 저장해놓기
                    sumV = 0
                    maxV = 0
                    # 개체수가 가장 많은 미생물의 방향 저장
                    maxD = 0
                    for k in posiLst[r][c]:
                        if maxV < k[2]:
                            maxV = k[2]
                            maxD = k[3]
                        sumV += k[2]
                    posiLst[r][c] = [r, c, sumV, maxD]

        # posiLst를 기반으로 cells의 정보를 새롭게 저장
        cells = []
        for i in range(N):
            for j in range(N):
                if posiLst[i][j] != []:
                    cells.append(posiLst[i][j])

    res = 0
    for c in cells:
        res += c[2]
    print(f'#{test_case} {res}')

