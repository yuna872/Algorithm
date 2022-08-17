arr = [[1, 3, 3, 5, 1], [3, 6, 2, 4, 2], [1, 9, 2, 6, 5]]

N = int(input())
cnt_arr = [0] * 10

for i in range(3):
    for j in range(5):
        cnt_arr[arr[i][j]] += 1

for idx in range(len(cnt_arr)):
    if cnt_arr[idx] == N:
        print(idx, end=" ")