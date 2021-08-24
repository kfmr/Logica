def count_elements(arr):
    sum_elements = 0
    for value in arr:
        sum_elements+=value
    return sum_elements


list_elements = [1,3,5,6,43,6]
result = count_elements(list_elements)
print(result)

