def simpleArraySum(ar):
    # Write your code here
    sum_el = 0
    for el in range(len(ar)):
        sum_el +=ar[el]
    return sum_el
    


arr = [50, 50, 100]

print(simpleArraySum(arr))