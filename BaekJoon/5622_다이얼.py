word = input()

sum = 0
for w in word:
    if(w in ['A','B','C']):
        sum += 3
    elif(w in ['D','E','F']):
        sum += 4
    elif(w in ['G','H','I']):
        sum += 5
    elif(w in ['J','K','L']):
        sum += 6
    elif(w in ['M','N','O']):
        sum += 7
    elif(w in ['P','Q','R','S']):
        sum += 8
    elif(w in ['T','U','V']):
        sum += 9
    elif(w in ['X','Y','W','Z']):
        sum += 10

print(sum, end = "")
    
