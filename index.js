const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
  
function findMatching(drivers, string){
let result = drivers.filter(element => element.toLowerCase() === string.toLowerCase())
return result
}

function fuzzyMatch(drivers, string){
    let result = drivers.filter(driversName => driversName.startsWith(string))
    return result;
    }

function matchName(drivers, string){
    const result = drivers.filter(drivers => drivers.name === string);
    return result
}
