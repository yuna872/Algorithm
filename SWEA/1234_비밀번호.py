# import sys
# sys.stdin = open('1234_input.txt', 'r')

for test_case in range(1, 11):
    n, string = input().split()

    n = int(n)

    ST = []

    for i in range(len(string)):
        if ST == []:
            ST.append(string[i])
        elif string[i] == ST[-1]:
            ST.pop()
        else:
            ST.append(string[i])

    print(f'#{test_case}', end=" ")
    for s in ST:
        print(s, end='')
    print()
