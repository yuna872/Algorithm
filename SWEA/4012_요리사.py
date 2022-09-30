import sys
sys.stdin = open('4012_input.txt', 'r')

def nCr(n, r, s):
    global minV

    if r == 0:
        comb2 = [x for x in igd if x not in comb1]
        # print(comb1, comb2)
        syn1, syn2 = 0, 0
        for j in range(N//2):
            for k in range(N//2):
                if j != k:
                    syn1 += S[comb1[j]][comb1[k]]
                    syn2 += S[comb2[j]][comb2[k]]
        if minV > abs(syn2-syn1):
            minV = abs(syn2-syn1)

    else:
        for i in range(s, n-r+1):
            comb1[r-1] = igd[i]
            nCr(n, r-1, i+1)


T = int(input())

for test_case in range(1, T+1):
    N = int(input())
    r = N//2

    igd = [i for i in range(N)]
    # print(igd)

    S = [list(map(int, input().split())) for _ in range(N)]
    comb1 = [0] * (N//2)
    minV = 1e9

    nCr(N, r, 0)
    print(f'#{test_case} {minV}')