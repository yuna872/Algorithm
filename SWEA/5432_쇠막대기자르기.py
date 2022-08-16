import sys
sys.stdin = open('5432_input.txt','r')

T = int(input())

for test_case in range(1, T+1):
    sticks = input()
    cnt = 0
    result = 0

    sticks = sticks.replace('()', '|')

    i = 0
    while i < len(sticks):
        # 열림 괄호 만나면 막대를 쌓아
        if sticks[i] == '(':
            cnt += 1
        # 닫는 괄호 만나면 막대 빼
        elif sticks[i] == ')':
            result += 1
            cnt -= 1
        # 레이저 만나면 썰어
        elif sticks[i] == '|':
            result += cnt

        i += 1

    print(f'#{test_case} {result}')








