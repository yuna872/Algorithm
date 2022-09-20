import sys
sys.stdin = open('1242_input.txt')

code_pat = {
    211 : 0,
    221 : 1,
    122 : 2,
    411 : 3,
    132 : 4,
    231 : 5,
    114 : 6,
    312 : 7,
    213 : 8,
    112 : 9,
}
# 배열전체를 이진수로 변환
def htod(ARR):
    for i in range(N):
        code = ARR[i]
        bin = ''
        for c in code:
            if c.isdecimal():
                c = int(c)
            else:
                c = ord(c) - ord('A') + 10

            for k in range(4):
                if c&8:
                    bin = bin + '1'
                else:
                    bin = bin + '0'
                c *= 2

        newARR[i] = bin


T = int(input())
# T = 1

for test_case in range(1, T+1):
    N, M = map(int, input().split())

    newARR = ['' for _ in range(N)]

    ARR = [input() for _ in range(N)]
    htod(ARR)



    ans = 0
    for row in range(1, N):
        if ARR[row] == '0' * M :
            continue

        j = 4 * M - 1

        while j >= 56:
            code = [0] * 8
            if newARR[row][j] == '1' and newARR[row - 1][j] =='0':
                for i in range(8):
                    a = [0] * 3
                    while newARR[row][j] == '1':
                        a[2] += 1
                        j -= 1
                    while newARR[row][j] == '0':
                        a[1] += 1
                        j -= 1
                    while newARR[row][j] == '1':
                        a[0] += 1
                        j -= 1
                    while newARR[row][j] == '0':
                        j -= 1

                    k = min(a)

                    code[7-i] = code_pat[a[0]//k * 100 + a[1]//k * 10 + a[2]//k]
                # print(code)

                # 암호 검증
                sumV = 0
                for k in range(8):
                    # 짝수번째 숫자일때
                    if k % 2:
                        sumV += code[k]
                    else:
                        sumV += code[k] * 3

                # 10으로 나누어 떨어지면
                if not sumV % 10:
                    ans += sum(code)
                else:
                    ans += 0

            else:
                j -= 1

    print(f'#{test_case} {ans}')




'''
1. 16진수를 2진수로 만든다
2.  j = 오른쪽 끝
    while newARR[row][j] == 1 and newARR[row-1][j] == 0:
        제일 오른쪽 끝에 있는 1을 찾는다. 
        
        # 코드 8개를 구한다
        for i in range(8):
            a[2] = 1의개수
            a[1] = 0의개수
            a[0] = 1의개수
            # a[0] = 0의개수 >> 버려
            
            k = min(a[0:2])
            
            코드 하나를 찾아온다.
        
        암호 검증
3. 
'''

