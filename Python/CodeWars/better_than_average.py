def better_than_average(class_points, your_points):
    average = sum(class_points, your_points) / (len(class_points) + 1) 
    return average < your_points


print(better_than_average([2,5],5))