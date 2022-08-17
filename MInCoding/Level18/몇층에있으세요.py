apt = [
    [15, 18, 17],
    [4, 6, 9],
    [10, 1, 3],
    [7, 8, 9],
    [15, 2, 6]
]

def isPattern(floor):
    for j in range(len(apt)):
        for i in range(3):
            if apt[j][i] != floor[i]:
                break
            else:
                if i == 2:
                    return j-1

floor = list(map(int,input().split()))
print(f'{isPattern(floor)}층')