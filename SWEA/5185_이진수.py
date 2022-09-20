import sys
sys.stdin = open('5185_input.txt','r')

T = int(input())

for test_case in range(1, T+1):
    N, hexa = input().split()
    N = int(N)
    bin = ''

    for n in range(N-1, -1, -1):
        if hexa[n].isdecimal():
            num = int(hexa[n])
        else:
            num = ord(hexa[n])-ord('A')+10

        for i in range(4):
            bin = str(num % 2) + bin
            num //= 2

    print(f'#{test_case} {bin}')




