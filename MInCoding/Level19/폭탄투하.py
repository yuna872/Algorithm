arr = [['_']*5 for _ in range(4)]

x1, y1 = map(int, input().split())
x2, y2 = map(int, input().split())

dx = [-1, 1, 0, 0, 1, 1, -1, -1]
dy = [0, 0, 1, -1, 1, -1, 1, -1]

for d in range(8):
    if 0 <= x1+dx[d] < 4 and 0 <= y1+dy[d] < 5:
        arr[x1+dx[d]][y1+dy[d]] = "#"

    if 0 <= x2+dx[d] < 4 and 0 <= y2+dy[d] < 5:
        arr[x2+dx[d]][y2+dy[d]] = "#"

for i in range(4):
    print(' '.join(arr[i]))