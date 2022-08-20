// Code your solution in this file!
//MAKE SURE YOUR ARRAY MANIPULATIONS ARE NON-DESTRUCTIVE
//should return a new array containing the first two drivers from the passed-in array
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(){
 let returnFirstTwoDrivers =[...drivers];
 returnFirstTwoDrivers.splice(2)
  return returnFirstTwoDrivers;
}
//hould return an array of the last two drivers
function returnLastTwoDrivers(){
  let returnLastTwoDrivers = [...drivers];
  return returnLastTwoDrivers.splice(-2)

}
//has the `returnFirstTwoDrivers` function to as its first element
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(){
    return function(a){
      return a*5;
    }
  }
  function  fareDoubler(fare){
    return fare*2;
  }
  function fareTripler(fare){
    return fare*3;
  }
  //returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
  //returns the last two drivers when passed returnLastTwoDrivers() as the second argument
  function selectDifferentDrivers(drivers, Function){
    if(Function ==returnFirstTwoDrivers){
      return returnFirstTwoDrivers();
    }else if(Function==returnLastTwoDrivers){
      return returnLastTwoDrivers();
    }

  }
