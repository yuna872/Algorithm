# 소수인지 판별하기
# 에라토스테네스의 체
def isprime(n):
    a = [False,False] + [True]*(n-1)
    primes=[]

    for i in range(2,n+1):
        if a[i]:
            primes.append(i)
            for j in range(2*i, n+1, i):
                a[j] = False
    return a[n]

T = int(input())


for t in range(T):
    N = int(input())
    num_pair = []
    min_diff = 0

    for n in range(2,round(N/2)):
        # 빼는 수 나머지 수가 둘 다 소수일 때만 저장
        if isprime(n) and isprime(N-n):
                num_pair.append([n,N-n])
        else: continue 
    
    # num_pair의 맨 마지막 리스트 원소 값 프린트
    print(num_pair[-1][0],num_pair[-1][1])

            


