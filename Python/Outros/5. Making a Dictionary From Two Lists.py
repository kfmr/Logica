#Two lists are provided named keys and values. Write a program that combines them into a dictionary name my_dict. The key keys[i] should have value values[i] for every index i.
#The keys does not have duplicates and both lists have the same length.

keys = ['Katherine Freeman', 'Tammy Gonzalez', 'Robin Matthews', 'Sherry Farrell', 'Emma Graves', 'Tina Brown', 'George Owens', 'Ronald Ball']
values = ['katherine.freeman@hoffman.net', 'tammy.gonzalez@gomez.info', 'robin.matthews@leblanc-lyons.org', 'sherry.farrell@reynolds-johnson.net', 'emma.graves@reid-little.info', 'tina.brown@yahoo.com', 'george.owens@yahoo.com', 'ronald.ball@thomas.com']

my_dict = {}
for i in range(len(keys)):
  my_dict[keys[i]] = values[i]

print(my_dict)

# pythonic way

my_dict = dict(zip(keys,values))