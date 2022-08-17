cardslist = list(input())

DAT = [0] * 25

for card in cardslist:
    DAT[ord(card)-65] += 1

cnt = 0
for i in DAT:
    if i != 0:
        cnt += 1

print(f'{cnt}개')
