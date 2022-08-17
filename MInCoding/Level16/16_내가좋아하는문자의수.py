arr = [['A','B','K','T'], ['K','F','C','F'], ['B','B','Q','Q'], ['T','P','Z','F']]

chrs = list(input().split())
cnt = 0

for chr in chrs:
    for i in range(4):
        for j in range(4):
            if arr[i][j] == chr:
                cnt += 1

print(cnt)