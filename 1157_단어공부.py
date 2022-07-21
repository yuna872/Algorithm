word = input().upper()

# 포함하고 있는(중복은 없는) 알파벳을 리스트로 만들기
word_set = list(set(word))
cnt_list = []

for char in word_set:
    cnt_list.append(word.count(char))

# 빈도값 중 최대값을 찾아서 인덱싱으로 해당 알파벳을 freq 변수에 저장
cnt_max = max(cnt_list)
freq = word_set[cnt_list.index(cnt_max)]

if(cnt_list.count(cnt_max)>1):
    print('?',end = "")
else :
    print(freq,end = "")


