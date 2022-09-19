import sys
sys.stdin = open('1240_input.txt', 'r')

code_dict={
    '0001101' : '0',
    '0011001' : '1',
    '0010011' : '2',
    '0111101' : '3',
    '0100011' : '4',
    '0110001' : '5',
    '0101111' : '6',
    '0111011' : '7',
    '0110111' : '8',
    '0001011' : '9'
}

def getCode(arr):
    for i in range(N):
        for j in range(M - 1, -1, -1):
            if arr[i][j] == '1':
                return arr[i][j-55:j+1]

def check(code):
    res = ''
    for i in range(0, 56, 7):
        # print(code[i:i+7])
        # print(code_dict[code[i:i+7]])
        res = res + code_dict[code[i:i+7]]

    return res

def checkSum(res):
    sum = 0
    for i in range(8):
        if i % 2:
            sum += int(res[i])
        else:
            sum += 3*int(res[i])
    # print(sum)
    res = int(res)
    if not sum % 10:
        ans = 0
        while res > 0:
            ans += res % 10
            res //= 10
        return ans

    else: return 0


T = int(input())

for test_case in range(1, T+1):
    N, M = map(int, input().split())

    arr = [input() for _ in range(N)]

    code = getCode(arr)
    res = check(code)
    print(f'#{test_case} {checkSum(res)}')






