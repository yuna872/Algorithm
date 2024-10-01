def dfs(num):
    tree[num] = -2
    for i in range(len(tree)):
        if num == tree[i]:
            dfs(i)

N = int(input())

tree = list(map(int, input().split()))
node = int(input())
cnt = 0

dfs(node)

for i in range(len(tree)):
    if tree[i] != -2 and i not in tree:
        cnt += 1
print(cnt)

