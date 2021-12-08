function findMatching(array, name){
    const user = array.filter(person => person.toUpperCase() === name.toUpperCase());
    return user;
}

function fuzzyMatch(array, fuzz){
    const user = array.filter(person => person.startsWith(fuzz));
    return user;
}

function matchName(obj, name){
    const user = obj.filter(person => person.name === name);
    return user;
}