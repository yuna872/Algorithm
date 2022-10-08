N = int(input())

lst = list(map(int, input().split()))
p = [-2] * (max(lst)+1)

# c1 = [0] * (max(lst)+1)
# c2 = [0] * (max(lst)+1)

for i in range(len(lst)):
    if i == 0:
        p[lst[i]] = -1
    if p[lst[i]] == -2:
        p[lst[i]] = lst[i-1]
    # print(p)

print(max(lst)+1)
for j in p:
    print(j, end= ' ')

