N = int(input())
arr = []
arr_cnt = [0] * 10000
arr_sorted = [0] * N

for n in range(N):
    arr.append(int(input()))

# 원소의 개수를 저장
for a in arr:
    arr_cnt[a] += 1

# 누적합 계산
for i in range(1, len(arr_cnt)):
    arr_cnt[i] += arr_cnt[i-1]

# 맨뒤에서부터 하나씩 줄여
for i in range(len(arr_sorted)-1, -1, -1):
    arr_cnt[arr[i]] -= 1
    arr_sorted[arr_cnt[arr[i]]] = arr[i]

print(arr_sorted)
