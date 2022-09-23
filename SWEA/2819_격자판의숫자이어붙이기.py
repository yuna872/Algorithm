import sys
sys.stdin = open('2819_input.txt', 'r')

# i, j >> 시작 인덱스, n >> 지금까지 확정된 숫자의 개수, numStr
def solve(i, j, n, numStr):
    global numLst

    if n == 6:
        if numStr in numLst:
            return
        else:
            numLst.append(numStr)
        return

    for di, dj in [(0, 1), (1, 0), (-1, 0), (0, -1)]:
        if 0 <= i+di < 4 and 0 <= j+dj < 4:
            i, j = i+di, j+dj
            solve(i, j, n+1, numStr + arr[i][j])
            i, j = i - di, j - dj



T = int(input())

for test_case in range(1, T+1):
    arr = [list(input().split()) for _ in range(4)]
    n = 6
    numLst = []

    # 시작위치가 되는 sti, stj
    for sti in range(4):
        for stj in range(4):
            solve(sti, stj, 0, arr[sti][stj])

    print(f'#{test_case} {len(numLst)}')