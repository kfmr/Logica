function titleCase(str) {
str = str.split(" ")
str = str.map(value => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())
return str.join(' ')
}

titleCase("I'm a little tea pot");