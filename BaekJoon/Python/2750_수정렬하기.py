N = int(input())
arr = []

for n in range(N):
    arr.append(int(input()))

# 버블 정렬
for i in range(N-1, 0, -1):
    for j in range(i):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]

for a in arr:
    print(a)

