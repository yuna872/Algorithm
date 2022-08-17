arr = [[0]*4 for _ in range(4)]

for i in range(3):
    direction, line_number = input().split()
    line_number = int(line_number)

    for i in range(4):
        if direction == 'G':
            if arr[line_number][i] == 0:
                arr[line_number][i] = 1
        else:
            if arr[i][line_number] == 0:
                arr[i][line_number] = 1

for i in range(4):
    for j in range(4):
        print(arr[i][j], end= " ")
    print()