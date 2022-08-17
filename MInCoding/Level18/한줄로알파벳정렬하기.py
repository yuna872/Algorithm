alphabet = [
    ['A', 'B', 'C'],
    ['A', 'G', 'H'],
    ['H', 'I', 'J'],
    ['K', 'A', 'B'],
    ['A', 'B', 'C']
]

DAT= [0]* 90

for i in range(5):
    for j in range(3):
        DAT[ord(alphabet[i][j])] += 1

for i in range(len(DAT)):
    print(chr(i)*DAT[i], end="")