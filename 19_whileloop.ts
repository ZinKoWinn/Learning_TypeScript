var a:number = 1;
while (a<=12) {
   console.log(a + ' * 3 = ' +  (a * 3));
    a++;
}

console.log();


//with break statement
var i:number = 1 
while(i<=15) { 
   if (i % 5 == 0) {   
      console.log ("The first exactly devisable by 5   between 1 and 15 is : "+i) 
      break;     
      //exit the loop if the first multiple is found 
   } 
   i++ 
} 