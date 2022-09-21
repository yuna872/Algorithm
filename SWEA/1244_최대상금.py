import sys
sys.stdin = open('1244_input.txt', 'r')

# 순열을 생성하는 함수
def change(s):
    global maxV

    if s == K:
        # print(nums)
        res = int(''.join(nums))
        if res > maxV:
            maxV = res
            return
    else:
        for j in range(s, len(nums)):
            nums[s], nums[j] = nums[j], nums[s]
            change(s+1)
            nums[j], nums[s] = nums[s], nums[j]


T = int(input())

for test_case in range(1, T+1):
    nums, K = input().split()
    nums = list(nums)
    K = int(K)
    maxV = 0

    change(0)
    print(f'#{test_case} {maxV}')


