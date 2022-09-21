import sys
sys.stdin = open('1244_input.txt', 'r')

# 순열을 생성하는 함수
def change(n, r, cnt, C):
    global maxV

    if cnt == C:
        res = int(''.join(nums))
        if res > maxV:
            maxV = res
            return

    elif n == r:
        # 반복횟수가 길이보다 더 클 경우에는 횟수만큼 도달하지 못하므로 더 돌려줘야 함
        if C > len(nums):
            change(0, r, cnt, C-len(nums))
            return
        return

    else:
        for j in range(n, len(nums)):
            nums[n], nums[j] = nums[j], nums[n]
            # 자기자신을 바꾸는 경우에는 카운트를 해주지 말자,,
            if n == j:
                change(n + 1, r, cnt, C)
            else:
                change(n + 1, r, cnt + 1, C)
            nums[j], nums[n] = nums[n], nums[j]


T = int(input())

for test_case in range(1, T+1):
    nums, C = input().split()
    nums = list(nums)
    C = int(C)
    maxV = 0


    change(0, len(nums), 0, C)
    print(f'#{test_case} {maxV}')


