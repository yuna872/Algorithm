map_arr = [
    [3, 5, 1],
    [3, 8, 1],
    [1, 1, 5]
]

bitarray = [list(map(int, input().split())) for _ in range(2)]
maxV = 0
max_idx = (0, 0)

# 시작 포인트
for y in range(2):
    for x in range(2):
        sumV = 0
        for i in range(2):
            for j in range(2):
                if bitarray[i][j] == 1:
                    sumV += map_arr[y+i][x+j]

        if sumV > maxV:
            maxV = sumV
            max_idx = (y, x)
print(max_idx)





