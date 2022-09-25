import sys
sys.stdin = open('5432_input.txt','r')

# T = int(input())
#
# for test_case in range(1, T+1):
#     sticks = input()
#     cnt = 0
#     result = 0
#
#     sticks = sticks.replace('()', '|')
#
#     i = 0
#     while i < len(sticks):
#         # 열림 괄호 만나면 막대를 쌓아
#         if sticks[i] == '(':
#             cnt += 1
#         # 닫는 괄호 만나면 막대 빼
#         elif sticks[i] == ')':
#             result += 1
#             cnt -= 1
#         # 레이저 만나면 썰어
#         elif sticks[i] == '|':
#             result += cnt
#
#         i += 1
#
#     print(f'#{test_case} {result}')

T = int(input())

for test_case in range(1, T+1):

    inputV = input().replace('()', '|')

    # 현재 쌓여있는 막대의 수
    pole = 0
    # 잘려진 조각을 담을 변수
    piece = 0
    for i in inputV:
        if i == '(':
            # 막대 시작점을 만나면 하나 쌓아 올리기
            pole += 1
        elif i == ')':
            # 막대 빼주면서 조각 +1
            piece += 1
            # 쌓여있는 막대 제거
            pole -= 1
        elif i == '|':
            # 레이저를 만나면 쌓여있는 막대 수 만큼 조각+
            piece += pole
    print(f'#{test_case} {piece}')











