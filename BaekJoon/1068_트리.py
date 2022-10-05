N = int(input())

parent = list(map(int, input().split()))
tree = [[] * (N+1)]
node = int(input())

for i in range(N):
    if parent[i] != -1:
        tree[parent[i]].append(i)

print(tree)

