import sys
sys.stdin = open('5186_input.txt', 'r')

T = int(input())

for test_case in range(1, T+1):
    num = float(input())
    # print(num)

    bin = ''
    i = -1
    while num > 0:
        if num >= 2**i:
            bin += '1'
            num -= 2**i
        else:
            bin += '0'
        i -= 1

    if len(bin) >=13:
        print(f'#{test_case} overflow')
    else:
        print(f'#{test_case} {bin}')
