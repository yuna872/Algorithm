import sys
sys.stdin = open('4366_input.txt', 'r')

def solve():
    # 이진수 조합 만들기
    for i in range(len(binary)):
        B = 0
        T = 0
        # 1이면 0으로 바꿔주기
        if binary[i] == '1':
            b = binary[:i] + '0' + binary[i + 1:]
        elif int(binary[i]) == 0:
            b = binary[:i] + '1' + binary[i + 1:]

        # 삼진수 조합 만들기
        for j in range(len(ternary)):
            for k in ['0', '1', '2']:
                # 변경될 숫자가 현재 숫자와 같으면 그냥 넘어가
                if ternary[j] == k:
                    continue
                t = ternary[:j] + k + ternary[j + 1:]
                if btod(b) == ttod(t):
                    return btod(b)

def btod(b):
    res = 0
    for i in range(len(b)):
        res += int(b[i]) * 2**(len(b)-i-1)
    return res

def ttod(t):
    res = 0
    for i in range(len(t)):
        res += int(t[i]) * 3 ** (len(t) - i - 1)
    return res


T = int(input())

for test_case in range(1, T+1):
    binary = input()
    ternary = input()

    print(f'#{test_case} {solve()}')









