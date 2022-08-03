word = input()

word_arr = [['A','B','C'],['D','E','F'],['G','H','I'],['J','K','L'],['M','N','O'],['P','Q','R','S'],['T','U','V'],['X','Y','W','Z']]
sum = 0
for w in word:
    for idx in range(len(word_arr)):
        if(w in word_arr[idx]):
            # 인덱스의 값보다 3 큰 수가 sum에 더해진다
            sum = sum + (idx + 3)

print(sum, end = "")
    
