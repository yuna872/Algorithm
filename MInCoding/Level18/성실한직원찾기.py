ids = [
    [65000, 35, 42, 70],
    [70, 35, 65000, 1300],
    [65000, 30000, 38, 42]
]

DAT = [0] * 65536

for id in ids:
    for i in range(len(id)):
        DAT[id[i]] += 1

maxV = 0
max_idx = 0
for i in range(len(DAT)):
    if DAT[i] > maxV:
        maxV = DAT[i]
        max_idx = i

print(max_idx)


