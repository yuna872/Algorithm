from collections import deque

import sys
input = sys.stdin.readline

N = int(input())

cards = deque([i for i in range(1, N+1)])

while len(cards) > 1:
    cards.popleft()
    cards.append(cards.popleft())

print(cards[0])

# # 카드 쌓기
# for i in range(N):
#     cards.append(i+1)
#
# while len(cards) > 1:
#     #카드 버리기
#     del cards[0]
#
#     #맨 밑으로
#     cards.append(cards.pop(0))
#
# print(cards[0])