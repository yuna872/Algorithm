import sys
sys.stdin = open('1228_input.txt', 'r')

for test_case in range(1,11):
    # 원본 암호문의 길이
    N = int(input())

    # 원본 암호문
    code = list(input().split())
    # print(code[:0])

    # 명령어의 개수
    M = int(input())

    # 명령어를 담을 배열
    arr = [[] for _ in range(M)]
    tmp = input().split()

    idx = -1
    for i in tmp:
        if i == 'I':
            idx += 1
        else:
            arr[idx].append(i)

    for a in arr:
        point = int(a[0])
        length = int(a[1])
        content = a[2:]
        code = code[:point] + content + code[point:]

    print(f'#{test_case}', end=" ")
    for i in range(10):
        print(code[i], end=' ')
    print()





