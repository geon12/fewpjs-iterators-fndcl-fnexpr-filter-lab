
/*
function findMatching(drivers,name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}
*/


const findMatching = (drivers,name) => drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());

const fuzzyMatch = (drivers,letters) => {
    return drivers.filter(driver => driver.slice(0,letters.length) === letters);
};

const matchName = (drivers,driverName) => {
    return drivers.filter(driver => driver.name === driverName);
}