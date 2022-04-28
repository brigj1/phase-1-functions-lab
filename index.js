const homeLocation = 42;
const feetPerBlock = 264;
const flatFareCost = 25; // for trips between 2000 and 2500 feet

function distanceFromHqInBlocks(pickupLocation) {
    //returns the number of blocks given a value
    return Math.abs(homeLocation - pickupLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    // call the distanceFromHqInBlocks function
    // from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet
    // into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks
    // can then be used to calculate feet
    return distanceInBlocks * feetPerBlock;
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const blocksTravelled = Math.abs(start - destination);
    return blocksTravelled * feetPerBlock;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    // Given the same starting and ending block as the previous
    // test (hint hint), return the fare for the customer.
    // The first four hundred feet are free. For a distance
    // between 400 and 2000 feet, the price is 2 cents per foot
    // (not including 400, which are free!). Then Scuber charges
    // a flat fare for a distance over 2000 feet and under 2500
    // feet. Finally, Scuber does not allow any rides over 2500
    // feet — the function returns 'cannot travel that far' if
    // a ride over 2500 feet is requested.
    const travelDistanceInFeet = distanceTravelledInFeet(start, destination);
    // const scuberFeet = scuberGreetingForFeet(travelDistanceInFeet);
    // return scuberCostForFeet(scuberFeet);
    return scuberCostForFeet(travelDistanceInFeet);
  }

  function scuberCostForFeet(feetToGo){
    let costOfTrip = 0;

    if (feetToGo > 2500) {
        return 'cannot travel that far';
    }

    if (feetToGo <= 400) {
        costOfTrip = 0;
    }
    else if (feetToGo > 400 && feetToGo <= 2000) {
        // might need to truncate result to second decimal place:
        costOfTrip = (feetToGo - 400) * 0.02;
    }
    else {  // must be that feetToGo > 2000
        costOfTrip = flatFareCost;
    }

    return costOfTrip;
  }