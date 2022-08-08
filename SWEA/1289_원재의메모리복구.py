T = int(input())

for t in range(1,T+1):
    binary = input()

    zero = binary.split('1')
    while '' in zero:
        zero.remove('')
    
    one = binary.split('0')
    while '' in one:
        one.remove('')

    if(binary[0] == '0'):
        print(f'#{t} {len(zero)+len(one)-1}')
    else:
        print(f'#{t} {len(zero)+len(one)}')


    