moum = ['a', 'e', 'i', 'o', 'u']

def nCr(n, r, s):
    if r == 0:
        cntM = 0
        cntJ = 0

        # 모음, 자음 개수 구하기
        for c in code:
            if c in moum:
                cntM += 1
            else:
                cntJ += 1
        if cntM >= 1 and cntJ >= 2:
            res.append(''.join(sorted(code)))

    # 오름차순 정렬
    else:
        for i in range(s, n-r+1):
            code[r-1] = alpha[i]
            nCr(n, r-1, i+1)


# L개의 알파벳으로 이루어진 암호, 문자의 종류 C개
L, C = map(int, input().split())

alpha = list(input().split())
code = [''] * L
res = []

nCr(C, L, 0)
res.sort()
for r in res:
    print(r)

