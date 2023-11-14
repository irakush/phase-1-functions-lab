// Code your solution in this file!
const ft = 264;

function distanceFromHqInBlocks(start){
  return Math.abs(start - 42);
}

function distanceFromHqInFeet(start) {
  return Math.abs(start - 42) * ft;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * ft;
}

function calculatesFarePrice(start, end) {
  const distance = Math.abs(start - end) * ft

  if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  }

  if (distance > 2000 && distance <= 2500) {
    return 25;
  }

  if (distance > 2500) {
    return 'cannot travel that far'
  }

  return 0;
}