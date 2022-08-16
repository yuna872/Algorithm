import sys
input = sys.stdin.readline

N = int(input())

cards = []

# 카드 쌓기
for i in range(N):
    cards.append(i+1)

while len(cards) > 1:
    #카드 버리기
    del cards[0]

    #맨 밑으로
    cards.append(cards.pop(0))

print(cards[0])
