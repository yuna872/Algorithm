def solve(depth):
    if depth == M:
        print(*res)
        return
    for i in range(len(nums)):
        if depth == 0 or res[-1]<=nums[i]:
            res.append(nums[i])
            solve(depth +1)
            res.pop()


N, M = map(int, input().split())
nums = sorted(list(set(map(int, input().split()))))

# 조합이 임시 저장될 배열
bucket = [0] * M
res = []
solve(0)

# print(sorted(res))

