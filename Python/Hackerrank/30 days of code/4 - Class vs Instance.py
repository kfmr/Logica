class Person:
    def __init__(self, initialAge):
        if(type(initialAge) is not int or initialAge < 0):
            self.initialAge = 0
            print("Age is not valid, setting age to 0.")

        self.initialAge = initialAge

    def amIOld(self):
        if(self.initialAge >= 18):
            print("You are old.")
        elif(self.initialAge >= 13 and self.initialAge < 18):
            print("You are a teenager.")
        else:
            print("You are young.")

    def yearPasses(self):
        self.initialAge = self.initialAge + 1
        return age


t = int(input())
for i in range(0, t):
    age = int(input())
    p = Person(age)
    p.amIOld()
    for j in range(0, 3):
        p.yearPasses()
    p.amIOld()
    print("")
