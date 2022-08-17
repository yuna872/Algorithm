def rectSum():
    maxV = 0
    max_y = 0
    max_x = 0
    for y in range(4 - 2 + 1):
        for x in range(4 - 3 + 1):
            sumV = 0
            for i in range(2):
                for j in range(3):
                    sumV += image[y + i][x + j]
            if sumV > maxV:
                maxV = sumV
                max_y = y
                max_x = x
    return max_y, max_x

image = [list(map(int, input().split())) for _ in range(4)]

print(rectSum())






