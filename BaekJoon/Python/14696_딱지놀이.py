import sys
sys.stdin = open('14696_input.txt')

def winner():
    while A and B:
        a, b = A.pop(), B.pop()
        if a > b:
            return 'A'
        if a < b:
            return 'B'
    if len(A) > len(B):
        return 'A'
    elif len(A) < len(B):
        return 'B'
    else: return 'D'

# 라운드 수
N = int(input())

for n in range(N):
    A = list(map(int, input().split()))
    numA = A[0]
    A = sorted(A[1:])
    # print(A)

    B = list(map(int, input().split()))
    numB = B[0]
    B = sorted(B[1:])
    # print(B)

    print(winner())




