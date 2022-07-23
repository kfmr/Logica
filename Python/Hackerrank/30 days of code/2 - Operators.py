# A tip of 15% * 100 = 15, and the taxes are 8% * 100 = 8. Print the value  and return from the function. Round the total cost


def solve(meal_cost, tip_percent, tax_percent):
    tip = (meal_cost / 100) * tip_percent
    tax = (meal_cost / 100) * tax_percent
    total_cost = round(meal_cost + tip + tax)
    print(total_cost)


if __name__ == '__main__':
    meal_cost = float(input().strip())

    tip_percent = int(input().strip())

    tax_percent = int(input().strip())

    solve(meal_cost, tip_percent, tax_percent)
