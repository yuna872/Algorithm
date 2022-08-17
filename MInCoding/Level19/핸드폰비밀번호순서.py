numbers = list(map(int, input().split()))
print(numbers)

arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

result = [[0]*4 for _ in range(4)]

for i in range(4):
    for j in range(4):
        for k in range(len(numbers)):
            if numbers[k] == arr[i][j]:
                result[i][j] = k+1
                break
            else:
                result[i][j] = 0

for i in range(4):
    for j in range(4):
        print(result[i][j], end=" ")
    print()

