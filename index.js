// Code your solution here
function findMatching(drivers, name){
    const newDrivers = drivers.filter(function(person){
        return person.toLowerCase() === name.toLowerCase()
    });
    return newDrivers;
}
function fuzzyMatch(drivers, name){
    const fuzzyDrivers = drivers.filter(function(person){
        return person.slice(0,1) === name.slice(0,1);
    });
    return fuzzyDrivers;
}
function matchName(drivers, name){
    const nameMatch = drivers.filter(function(person){
        return person === name;
    });
    return nameMatch;
}