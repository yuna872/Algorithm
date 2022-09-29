def nCr(n, r, s):
    if r == M :
        print(comb)
    else:
        for i in range(s, n):
            comb[i] = nums[i]
            nCr(n, r+1, i+1)



N, M = map(int, input().split())

nums = list(map(int, input().split()))

# 조합이 임시 저장될 배열
comb = [0] * M
res = []


nCr(N, M, 0)
