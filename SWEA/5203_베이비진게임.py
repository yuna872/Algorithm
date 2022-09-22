import sys
sys.stdin = open('5203_input.txt', 'r')

T = int(input())

def check(card):
    c = [0] * 12

    # 카운트 배열에 카드 수 저장하기
    for i in range(len(card)):
        c[card[i]] += 1

    i = 0
    while i < 10:
        if c[i] >= 3:
            return 1
        else:
            if c[i] >= 1 and c[i+1] >= 1 and c[i+2] >= 1:
                return 1
        i += 1

    return 0

for test_case in range(1, T+1):
    nums = list(map(int, input().split()))

    player1 = []
    player2 = []
    res = 0

    for i in range(len(nums)):

        if i % 2 == 0:
            player1.append(nums[i])
            if i > 5:
                res = check(player1)

        else:
            player2.append(nums[i])
            if i > 5:
                res = check(player2)

        # 이겼으면
        if res:
            print(f'#{test_case} {i%2 + 1}')
            break
    if not res:
        print(f'#{test_case} 0')

