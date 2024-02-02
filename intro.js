// var number = 0;
// if(number<0 && number>100){
//     console.log("Invalid number");
// }
// else if(number<=100 && number>=90){
//     console.log("A+");
// }
// else if(number<90 && number>=85){
//     console.log("A");
// }
// else if(number<85 && number>=80){
//     console.log("B+");
// }
// else if(number<80 && number>=75){
//     console.log("B");
// }
// else if(number<75 && number>=70){
//     console.log("C+");
// }
// else if(number<70 && number>=65){
//     console.log("C");
// }
// else if(number<65 && number>=60){
//     console.log("D+");
// }
// else if(number<60 && number>=50){
//     console.log("D");
// }
// else if(number<50 && number>=0){
//     console.log("Fail");
// }
// else{
//     console.log("Invalid number!")
// }

// for(var i=0; i<11; i++){
//     console.log("Number:"+i);
// }

const array = [23, 45, 2, 12, 4];
// console.log(array);
// console.log(array[1]);
// array.push(20);
// console.log(array);
// array.pop();
// array.pop();
// console.log(array);

// Length of array
console.log(array.length);

console.log("number of index: "+array.indexOf(2))

// Loop
// for(initialization; ConditionRule; increment/decrement){}

for(const num of array){ //for of
    console.log(num);
}

const country = ["Bangladesh", "India", "Pakistan", "United States", "united Kingdom", "Soudi Arabia"];

let num = 0;  // loop variable
while(num < country.length){ // Loop condition
    console.log(country[num]); //loop statement
    num++; // incremental 
}
console.log("\nLength Of the array is: "+country.length+ "\n");

// Even number from the loop
for(let num=0; num<=10;num++){
    if(num%2==0){
        console.log("Even Number is: "+num);
    }else{
        console.log("Odd Number is: "+num);
    }
}