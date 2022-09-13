# import sys
# sys.stdin = open('1232_input.txt')

def postorder(n):
    global ST
    if tree[n]:
        postorder(left[n])
        postorder(right[n])

        if tree[n] in ['*', '/', '-', '+']:

            v1 = ST.pop()
            v2 = ST.pop()

            if tree[n] == '+':
                ST.append(v2 + v1)
            elif tree[n] == '-':
                ST.append(v2 - v1)
            elif tree[n] == '*':
                ST.append(v1 * v2)
            elif tree[n] == '/':
                ST.append(v2 / v1)
        else:
            ST.append(tree[n])


for test_case in range(1, 11):
    N = int(input())

    tree = [0] * (N+1)
    left = [0] * (N+1)
    right = [0] * (N+1)

    ST = []

    # 트리 생성
    for _ in range(N):
        lst = list(input().split())

        if lst[1].isdigit():
            tree[int(lst[0])] = int(lst[1])
        else:
            tree[int(lst[0])] = lst[1]
            left[int(lst[0])] = int(lst[2])
            right[int(lst[0])] = int(lst[3])

    postorder(1)

    print(f'#{test_case} {int(ST[0])}')



