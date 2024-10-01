import sys
sys.stdin = open('2468_input.txt', 'r')

def dfs():
    return

N = int(input())

arr = [list(map(int, input().split())) for _ in range(N)]

# 최대 높이 찾기 >> 모든 땅이 잠기는 경우는 없음
maxV = 0
for i in range(N):
    for j in range(N):
        if arr[i][j] > maxV:
            maxV = arr[i][j]

for h in range(maxV):
