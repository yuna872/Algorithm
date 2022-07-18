T = int(input())

for t in range(T):
    input_list = list(map(int,input().split()))
    length = input_list[0]
    score_list = input_list[1:]
    
    avg = sum(score_list)/length
    count = 0
    for n in score_list:
        if(n > avg):
            count += 1

    print('{:.3f}%'.format(round((count/length)*100,3)))