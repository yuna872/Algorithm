for test_case in range(1,11):
    N = int(input())

    vaildation = {'(': True, '{': True, '[': True, '<': True}

    arr = list(input())

    for i in range(len(arr)):
        if arr[i] == '(':
            vaildation[arr[i]] = not vaildation[arr[i]]
        elif arr[i] == '{':
            vaildation[arr[i]] = not vaildation[arr[i]]
        elif arr[i] == '[':
            vaildation[arr[i]] = not vaildation[arr[i]]
        elif arr[i] == '<':
            vaildation[arr[i]] = not vaildation[arr[i]]
        elif arr[i] == ')':
            vaildation['('] = not vaildation['(']
        elif arr[i] == '}':
            vaildation['{'] = not vaildation['{']
        elif arr[i] == ']':
            vaildation['['] = not vaildation['[']
        elif arr[i] == '>':
            vaildation['<'] = not vaildation['<']

    if False in vaildation.values():
        print(f'#{test_case} 0')
    else:
        print(f'#{test_case} 1')
