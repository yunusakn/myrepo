let num=50//Prime numbers up to 50 in 1
let x
let y
let myArray=[]


for(x=2;x<num;x++){
   
   for(y=2;y<x;y++){
    let kalan=x%y
    myArray[y-2]=kalan
 }
    if(myArray.some(index=>index==0)){
      console.log(x ,'not a prime number')
   }else{
      console.log(x ,'Prime Number')
      }
}



