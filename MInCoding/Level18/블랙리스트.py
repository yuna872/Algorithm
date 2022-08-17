town = [
    ['C', 'D', 'A'],
    ['B', 'M', 'Z'],
    ['Q', 'P', 'O']
]

black = list(input())
cnt = 0

for i in range(3):
    for j in range(3):
        for b in black:
            if town[i][j] == b:
                cnt += 1
print(f'{cnt}명')