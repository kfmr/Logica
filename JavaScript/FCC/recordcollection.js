// Setup
var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
console.log(recordCollection[2468].artist)
  
  
      // Your function must always return the entire record collection object.
      // If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
      // If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
      // If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
      // If value is an empty string, delete the given prop property from the album.
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
   if(!value){
       delete records[id][prop]
   }else if(value){
       if(prop != 'tracks'){
        records[id][prop] = value

       } else if(prop === 'tracks'){
           if(Array.isArray(records[id][prop])){
           records[id][prop].push(value)
           }
           else{
            records[id][prop] =[value]
           }
       }
       else {
           records[id][prop] = []
       }
   }
    return records;
  }
  recordCollection[5439]
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
updateRecords(recordCollection, 2468, "tracks", "Free")
console.log(recordCollection)