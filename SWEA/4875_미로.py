import sys
sys.stdin = open('4875_input.txt', 'r')

# 순서 상관 없어..
dr = [0, 0, 1, -1]
dc = [1, -1, 0, 0]

# 2에서 3까지 갈 수 있으면 1을 return 하고 아니면 0
def dfs(curR, curC):
    visited = [[False]*N for _ in range(N)]
    ST = []

    # 1. 스택에 시작점을 push, 방문표시
    ST.append((curR, curC))
    visited[curR][curC] = True
    # 2. 스택에 데이터가 있는 동안 반복
    while ST:
        curR, curC = ST.pop()
        # cur point와 연결된 모든 point레 대하여
        for d in range(4):
            newR = curR + dr[d]
            newC = curC + dc[d]
            # new가 이동이 가능하면
            # 방문 안했으면
            # 0 또는 3 일때 방문해야 하므로 miro[newR][newC] != 1 이 조건 사용
            if 0 <= newR < N and 0 <= newC < N and miro[newR][newC] != 1 and not visited[newR][newC]:
                # 3에 도달하면 return 1
                if miro[newR][newC] == 3:
                    return 1
                # 연결된 부분은 스택에 넣어..
                ST.append((newR, newC))
                visited[newR][newC] = True
    return 0

T = int(input())

for test_case in range(1, T+1):
    N = int(input())
    miro = [list(map(int, input())) for _ in range(N)]
    ST = []

    # 시작위치
    for row in range(N):
        if miro[row].count(2):
            curC = miro[row].index(2)
            curR = row
            break

    print(f'#{test_case} {dfs(curR, curC)}')














