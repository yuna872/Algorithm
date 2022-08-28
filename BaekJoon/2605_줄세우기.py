N = int(input())

nums = list(map(int, input().split()))

ans = []

for i in range(N):
    # 일단 원소 맨 뒤에 집어 넣기
    ans.append(i+1)

    if nums[i] > 0:
        cnt = 0
        idx = i

        while cnt < nums[i]:
            ans[idx], ans[idx-1] = ans[idx-1], ans[idx]
            cnt += 1
            idx -= 1

for a in ans:
    print(a, end=' ')
print()




