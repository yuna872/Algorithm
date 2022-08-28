import sys
sys.stdin = open('1231_input.txt', 'r')

def inorder(root):
    if root:
        if len(tree[root]) == 1:
            print(tree[root][0], end='')

        if len(tree[root]) == 2:
            inorder(int(tree[root][1]))
            print(tree[root][0], end='')

        if len(tree[root]) == 3:
            inorder(int(tree[root][1]))
            print(tree[root][0], end='')
            inorder(int(tree[root][2]))

for test_case in range(1, 11):
    N = int(input())
    tree = [['', 0, 0]]

    for n in range(N):
        tmp = input().split()
        tree.append(tmp[1:])

    # print(tree)
    print(f'#{test_case}', end=' ')
    inorder(1)
    print()




