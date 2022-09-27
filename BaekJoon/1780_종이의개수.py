import sys
sys.stdin = open('1780_input.txt', 'r')

# i, j: 시작 인덱스
def dfs(x, y, n):
    global answer

    num = paper[x][y]
    # 반복문을 통해 종이를 확인
    for i in range(x, x + n):
        for j in range(y, y + n):
            # 시작점에 종이의 수가 현재 종이의 수와 다르다면
            if paper[i][j] != num:
                # 3 * 3 범위를 재귀적으로 탐색
                for k in range(3):
                    for l in range(3):
                        dfs(x + k * n // 3, y + l * n // 3, n // 3)
                return

    if num == -1:
        answer[0] += 1
        return
    elif num == 0:
        answer[1] += 1
        return
    else:
        answer[2] += 1
        return


N = int(input())
paper = [list(map(int, input().split())) for _ in range(N)]
answer = [0, 0, 0]


dfs(0, 0, N)
for a in answer:
    print(a)
