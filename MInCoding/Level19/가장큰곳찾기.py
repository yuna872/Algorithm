def sum(x,y):
    sumV = 0
    dx = [1, 1, -1, -1]
    dy = [1, -1, 1, -1]

    for d in range(4):
        if 0 <= x+dx[d] < 5 and 0 <= y+dy[d] < 5:
            sumV += MAP[x+dx[d]][y+dy[d]]
    return sumV

MAP = [
    [3, 3, 5, 3, 1],
    [2, 2, 4, 2, 6],
    [4, 9, 2, 3, 4],
    [1, 1, 1, 1, 1],
    [3, 3, 5, 9, 2]
]

max_sumV = 0
for i in range(5):
    for j in range(5):
        if sum(i, j) > max_sumV:
            max_sumV = sum(i, j)
            row, col = i, j

print(row, col)
