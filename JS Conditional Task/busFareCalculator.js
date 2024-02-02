/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let regularTicket = 800;
let age = 65;
let category = "Senior";
let finalTicketPrice=0;

if(age<10 && age >= 0){
    console.log("You are a child. Your Ticket is totally Free!");
}else if(age>=60 && category==="Senior"){
    finalTicketPrice = regularTicket - (regularTicket * (15/100));
    console.log("You are a Senior citizen you can get 15% off. Your ticket price is: ", finalTicketPrice);
}
else if(category==="Student"){
    finalTicketPrice = regularTicket - (regularTicket * (50/100));
    console.log("You are a Student. You can get 50% offer of Your ticket price: ", finalTicketPrice);
}else{
    console.log("invalid!");
}