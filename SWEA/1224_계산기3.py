import sys
sys.stdin = open('1224_input.txt', 'r')

isp = {'*': 2, '+': 1, '(': 0}
icp = {'*': 2, '+': 1, '(': 3}

for test_case in range(1, 11):
    N = int(input())

    inputV = list(input())

    ST = []
    PO = []

    for i in inputV:
        if i == '*' or i == '+' or i == '(':
            if len(ST) == 0:
                ST.append(i)
            elif icp[i] > isp[ST[-1]]:
                ST.append(i)
            else:
                PO.append(ST.pop())
                ST.append(i)
        elif i == ')':
            # 여는 괄호가 나올 때 까지
            while ST[-1] != '(':
                PO.append(ST.pop())
            # 여는 괄호 버려
            ST.pop()
        else:
            PO.append(int(i))

    while ST:
        PO.append(ST.pop())

    ST = []
    for p in PO:
        if p == '*':
            v1 = ST.pop()
            v2 = ST.pop()
            ST.append(v1 * v2)
        elif p == '+':
            v1 = ST.pop()
            v2 = ST.pop()
            ST.append(v1 + v2)
        else:
            ST.append(p)
    print(f'#{test_case} {ST[0]}')



