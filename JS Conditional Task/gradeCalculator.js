/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let number = 60.7;

if(number>=90 && number<=100){
    console.log("A");
}else if(number<90 && number>=80){
    console.log("B");
}else if(number<80 && number>=70){
    console.log("C");
}else if(number<70 && number>=60){
    console.log("D");
}else if(number<60 && number>=0){
    console.log("F");
}else{
    console.log("Number is Invalid! \nEnter the valid number.");
}