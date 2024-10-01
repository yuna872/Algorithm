N = int(input())

nums = list(map(int, input().split()))

cnt1 = 1
cnt2 = 1
i = 1
maxV = 1
while i < N:
    # 오름차순
    if nums[i - 1] <= nums[i]:
        cnt1 += 1
        if cnt1 > maxV:
            maxV = cnt1
    else:
        cnt1 = 1

    # 내림차순
    if nums[i - 1] >= nums[i]:
        cnt2 += 1
        if cnt2 > maxV:
            maxV = cnt2
    else:
        cnt2 = 1
    i += 1

print(maxV)
