arr = [list(input()) for _ in range(3)]
# print(arr)

DAT = [0] * 90

for i in range(3):
    for j in range(len(arr[i])):
        DAT[ord(arr[i][j])] += 1

for i in range(len(DAT)):
    if DAT[i] > 1:
        print('No')
    else:
        if i == len(DAT)-1:
            print('Perfect')

