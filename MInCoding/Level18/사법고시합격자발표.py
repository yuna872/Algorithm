win = [
    [3, 5, 1],
    [4, 2, 6]
]

people = list(map(int, input().split()))
result = False

for p in people:
    for i in range(2):
        for j in range(3):
            if win[i][j] == p:
                result = True

    if result == False:
        print(f'{p}번 불합격')
    else:
        print(f'{p}번 합격')