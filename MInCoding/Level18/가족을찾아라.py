arr = [['G','K','G']]

arr.append(list(input().split()))

DAT = [0] * 90

for i in range(2):
    for j in range(3):
        DAT[ord(arr[i][j])] += 1

for i in range(len(DAT)):
    if DAT[i] >= 3:
        print("있음")
        break
    else :
        if i == len(DAT)-1:
            print('없음')
