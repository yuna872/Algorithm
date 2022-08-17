train = [3, 7, 6, 4, 2, 9, 1, 7]

team = list(map(int, input().split()))
n = len(train)
m = len(team)

i = 0
j = 0
while i < n and j < m:
    if train[i] == team[j]:
        i += 1
        j += 1
    else :
        i = i - j + 1
        j = 0

print(f'{i-m}번~{i-1}번 칸' )

