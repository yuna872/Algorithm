def nCr(n, r, s):
    if r == 0:
        print(comb)
    else:
        # s : 선택할 수 있는 구간의 시작
        for i in range(n-r+1):
            comb[r-1] = nums[i]
            nCr(n, r-1, i+1)


N, M = map(int, input().split())

nums = list(map(int, input().split()))

# 조합이 임시 저장될 배열
comb = [0] * M
res = []


nCr(N, M, 0)
