def person(name,age,job, func):
  return func(name, age,job)


def personString(name, age,job):
  return f"{name} is {age} years old and works as {job}"


a = person("ayla", 25, "dev", personString)
print(a)