arr = []

for _ in range(9):
    height = int(input())
    arr.append(height)

# 2**9 개의 부분집합
for i in range(1 << 9):
    sumV = 0
    subset = []
    # 원소의 수만큼 비트를 비교
    for j in range(9):
        if i & (1 << j):
            subset.append(arr[j])
            sumV += arr[j]
    if len(subset) == 7 and sumV == 100:
        # print(sorted(subset))
        for s in sorted(subset):
            print(s)
        break
