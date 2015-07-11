//the input used for the parameter
function randomSeat(array){

  //shuffle array
  function shuffle(array) {
    var copy = [], n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      copy.push(array.splice(i, 1)[0]);
    }
    return copy;
  }
  var mod = shuffle(array);

  var neighbors = [];

  //checks neighbors
  function tester(test){
   neighbors = [];
   for(var i = 0; i<array.length; i+=2){
     if(test.indexOf(current[i])%2 === 0){
       //check ahead
       if(current[i+1] === test[test.indexOf(current[i])+1]){
       neighbors += false;
       }
     }
     if(test.indexOf(current[i])%2 === 1){
       //check behind
       if(current[i+1] === test[test.indexOf(current[i])-1]){
       neighbors += false;
       }
     }
   neighbors += true;
   }
  }

  //is not the same Neighbor?
  function truthy(x){
    return x === true;
  }

  //keep shuffling until different neighbors
  while(!(neighbors.every(truthy))){
    shuffle(array);
    tester(mod);
  }
  console.log(mod);
  return mod;
}