T = int(input())

str_pair = {'b': 'd', 'd': 'b', 'p': 'q', 'q': 'p'}

for test_case in range(1,T+1):
    str = input()
    new_str = ""

    for s in str:
        new_str = str_pair[s] + new_str

    print(f'#{test_case} {new_str}')