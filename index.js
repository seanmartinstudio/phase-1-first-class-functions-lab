// 1
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
};

// 2
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
   };

//3
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//4
function createFareMultiplier(multiplier) {
    return function(fare) {
    return   fare * multiplier;
    }
}

//5
function fareDoubler(fare) {
    const result = createFareMultiplier(2)(fare)
   return result
}

//6
function fareTripler(fare) {
    const result = createFareMultiplier(3)(fare)
   return result
}

//7
// function selectDifferentDrivers(drivers, func) {
//     if(func === returnFirstTwoDrivers()) {
//         return drivers.slice(0,2);
//     } else if (func === returnLastTwoDrivers()) {
//         return drivers.slice(-2);
//     }
// }

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}