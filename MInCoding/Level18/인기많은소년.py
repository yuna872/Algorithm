S = list(input())

DAT = [0] * 25

for s in S:
    DAT[ord(s) - 65] += 1

maxV = 0
max_idx = 0

for i in range(len(DAT)):
    if DAT[i] > maxV:
        maxV = DAT[i]
        max_idx = i

print(chr(65+max_idx))