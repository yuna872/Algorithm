arr = ['A', 'T', 'K', 'P', 'T', 'C', 'A', 'B', 'C']
A, B = input().split()

idxA = 0
idxB = 0
for i in range(len(arr)):
    if arr[i] == A:
        idxA = i

for j in range(len(arr)-1, -1, -1):
    if arr[i] == B:
        idxB = i

if idxA > idxB:
    print(idxA-idxB)
else:
    print(idxB-idxA)

