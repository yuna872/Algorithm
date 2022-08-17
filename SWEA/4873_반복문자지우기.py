T = int(input())

for test_case in range(1, T+1):
    chars = input()
    stack = ['']

    for i in range(len(chars)):
        # 반복된 문자열이면 넣지 않아
        if chars[i] == stack[-1]:
            stack.pop()
        else:
            stack.append(chars[i])

    print(f'#{test_case} {len(stack)-1}')

