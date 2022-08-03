# 소수인지 판별하기
def isprime(n):
    for i in range(2,n):
            if(n % i == 0):
                return False
    return True

T = int(input())


for t in range(T):
    N = int(input())
    # 빼는 수 나머지 수가 둘 다 소수일 때만 저장
    num_pair = [[n,N-n] for n in range(2,round(N/2)) if isprime(n) and isprime(N-n)]
    min_diff = 0
    
    # num_pair의 맨 마지막 리스트 원소 값 프린트
    print(num_pair[-1][0],num_pair[-1][1])

            


