T = int(input())

triangle = []

for row in range(10):
    triangle.append([])
    for col in range(row + 1):
        # 열 번호가 맨 앞이거나 맨 뒤일 때 1을 원소로 추가
        if (col == 0 or col == row):
            triangle[row].append(1)
        # 그 외의 경우에는 [row-1][col-1],[row-1][col]의값을 더해 준 값 추가
        else:
            triangle[row].append(triangle[row - 1][col - 1] + triangle[row - 1][col])

# print(triangle)

#
for t in range(T):
    rows = int(input())

    print(f'#{t+1}')

    for y in range(rows):
        for x in range(len(triangle[y])):
            print(triangle[y][x], end=' ')
        print()

               