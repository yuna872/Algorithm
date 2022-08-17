arr = [
    [3, 5, 4],
    [1, 1, 2],
    [1, 3, 9]
]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

x, y = map(int, input().split())

sumV = 0
for d in range(4):
    if 0 <= x+dx[d] < 3 and 0<= y+dy[d] < 3:
        sumV += arr[x+dx[d]][y+dy[d]]

print(sumV)