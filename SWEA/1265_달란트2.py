import sys
sys.stdin = open('1265_input.txt', 'r')

T = int(input())

for test_case in range(1, T+1):
    N, P = map(int, input().split())

    tmp = 0
    mok = 0

    for i in range(N):
        if (N-i) % P == 0:
            tmp = i
            mok = (N-i) // P
            break

    nums = [mok] * P

    for i in range(1, tmp+1):
        nums[i] += 1

    result = 1
    for n in nums:
        result *= n

    print(f'#{test_case} {result}')



