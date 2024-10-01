N = int(input())
# count를 N으로 설정해놓고 조건에 맞지 않으면 하나씩 제거하는 형식으로 할거임
count = N

for n in range(N):
    word = input()
    
    for i in range(len(word)-1):
        # 현재 문자가 다음문자와 같으면 아무작업도 하지 않음
        if(word[i] == word[i+1]):
            pass
        # 현재문자와 다음문자가 다르고, 현재문자가 그 뒤에도 있으면 count-1, break
        elif(word[i] in word[i+1:]):
            count -= 1
            break
    
print(count)
        
        
