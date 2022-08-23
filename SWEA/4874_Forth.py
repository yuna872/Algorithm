cal = ['*', '/', '-', '+']

T = int(input())

for test_case in range(1, T+1):
    inputV = input().split()

    ST = []

    for i in inputV:
        if i in cal:
            if len(ST) >= 2:
                v1 = ST.pop()
                v2 = ST.pop()
                if i == '*':
                    ST.append(v1 * v2)
                elif i == '+':
                    ST.append(v1 + v2)
                elif i == '-':
                    ST.append(v2 - v1)
                elif i == '/':
                    ST.append(v2 // v1)
            else:
                print(f'#{test_case} error')
                break
        elif i == '.':
            if len(ST) == 1:
                print(f'#{test_case} {ST[0]}')
            else:
                print(f'#{test_case} error')
                break
        else:
            ST.append(int(i))




