arr = list(input())

DAT = [0] * 90

for i in range(len(arr)):
    DAT[ord(arr[i])] += 1

maxV = 0
max_idx = 0
for i in range(len(DAT)):
    if DAT[i] > maxV:
        maxV = DAT[i]
        max_idx = i

print(chr(max_idx))