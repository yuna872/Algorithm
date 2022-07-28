T = int(input())

for t in range(T):
    word = input()

    for char in word:
        if( char in ['a','e','i','o','u']):
            word = word.replace(char , "")

    print(f'#{t+1} {word}')
