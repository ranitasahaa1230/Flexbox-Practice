function outer (){
    let counter = 0;
    function incrementCounter (){ 
        counter ++; 
        console.log(counter);
    }
    return incrementCounter;
   }
   const myNewFunction = outer();
   myNewFunction();
   myNewFunction();

   const myFunction = myNewFunction;
   myFunction(); // 3
   myFunction(); // 4

   const anotherFunction = outer();
   anotherFunction();
   anotherFunction();
