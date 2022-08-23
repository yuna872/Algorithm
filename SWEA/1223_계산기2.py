import sys
sys.stdin = open('input.txt', 'r')

isp = {'*': 2, '+': 1}
icp = {'*': 2, '+': 1}

for test_case in range(1, 11):
    N = int(input())

    inputV = list(input())

    ST = []
    PO = []

    for i in inputV:
        if i == '*' or i == '+':
            if len(ST) == 0:
                ST.append(i)
            elif icp[i] > isp[ST[-1]]:
                ST.append(i)
            else:
                PO.append(ST.pop())
                ST.append(i)
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



