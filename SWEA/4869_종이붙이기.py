T = int(input())
memo = [1, 1]

for i in range(2, 31):
    memo.append(memo[i - 2] * 2 + memo[i - 1])

for test_case in range(1, T+1):
    N = int(input())

    print(f'#{test_case} {memo[N//10]}')



