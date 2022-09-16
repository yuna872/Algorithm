import sys
sys.stdin = open('5688_input.txt', 'r')

T = int(input())

def solution():
    i = 1
    while 1:
        if i ** 3 > N:
            return -1
        elif i ** 3 == N:
            return i
        i += 1

for test_case in range(1, T+1):
    N = int(input())

    print(f'#{test_case} {solution()}')
