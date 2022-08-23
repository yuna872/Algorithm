import sys
sys.stdin = open('3499_input.txt', 'r')

T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    lst = list(input().split())

    if N % 2 :
        left = lst[:N//2+1]
        right = lst[N//2+1:]
    else:
        left = lst[:N//2]
        right = lst[N//2:]

    print(f'#{test_case}', end=" ")
    while left or right:
        if left:
         print(left.pop(0), end=" ")
        if right:
         print(right.pop(0), end=' ')
    print()