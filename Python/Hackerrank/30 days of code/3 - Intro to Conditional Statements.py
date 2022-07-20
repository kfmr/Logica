# // If is odd, print Weird
# // If is even and in the inclusive range of  to, print Not Weird
# // If is even and in the inclusive range of  to, print Weird
# // If is even and greater than, print Not Weird

if __name__ == '__main__':
    N = int(input().strip())
    oddOrEven = N % 2 == 0
    print(oddOrEven)
    if(oddOrEven and ((N > 20) or (N >= 2 and N <= 5))):
        print("Not Weird")
    else:
        print("Weird")
