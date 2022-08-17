input = [list(map(int, input().split())) for _ in range(4)]

vect = [[0]*3 for _ in range(4)]

for i in input:
    vect[i[0]][i[1]] = 5

for y in range(4):
    for x in range(3):
        print(vect[y][x], end=" ")
    print()



