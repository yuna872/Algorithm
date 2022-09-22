import sys
sys.stdin = open('1244_input.txt', 'r')

def solve(k, card):
    global maxV

    if k == N:
        if maxV < card:
            maxV = card
        return

    if card in arrLst:
        return
    else:
        arrLst.append(card)

    card = list(str(card))
    K = len(card)
    for i in range(K-1):
        for j in range(i+1, K):
            card[i], card[j] = card[j], card[i]
            solve(k+1, int(''.join(card)))
            card[i], card[j] = card[j], card[i]


T = int(input())

for test_case in range(1, T+1):
    CARD, N = map(int, input().split())

    maxV = 0
    arrLst = [0] * N
    solve(0, CARD)

    print(f'#{test_case} {maxV}')





