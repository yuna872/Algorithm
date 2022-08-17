T = int(input())

def validation(sentence):
    stack = []
    for s in sentence:
        # 열린 괄호는 스택에 저장
        if s == '(' or s == '{':
            stack.append(s)
        if s == ')' or s == '}':
            # 원래 비어있는 경우도 생각해줘야함..
            if not stack:
                return 0
            # 조건문이 실행될때 pop도 적용된다,, pop했을 때 아무 문제 없으면 넘어가
            elif s == ')' and stack.pop() != '(':
                return 0
            elif s == '}' and stack.pop() != '{':
                return 0

    if stack:
        return 0
    return 1


for test_case in range(1, T+1):

    sentence = input()

    print(f'#{test_case} {validation(sentence)}')





