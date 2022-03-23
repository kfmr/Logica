# A dictionary people is provided. Create a list named values that contains all values in the people dictionary.

people = {"Katherine Freeman": "katherine.freeman@hoffman.net","Tammy Gonzalez": "tammy.gonzalez@gomez.info","Robin Matthews": "robin.matthews@leblanc-lyons.org","Sherry Farrell": "sherry.farrell@reynolds-johnson.net","Emma Graves": "emma.graves@reid-little.info","Tina Brown": "tina.brown@yahoo.com","George Owens": "george.owens@yahoo.com","Ronald Ball": "ronald.ball@thomas.com"}

values =[]
for value in people.values():
    values.append(value)
    
print(values)

# pythonic way
values = list(people.values())