// array of employee objects
const employees = [
  {
    //rating bonus of 4% and a 4 digit bonus of 5%
    // adjusted bonus is 9%
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    // employee rating bonus of 6% no 4 digit. 
    // adjusted bonus of 6%
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    //review rating gives them 10% + the 4 digit bonus of 5%. no bonus can be greater than 13% so reduce it to 13%
    // adjusted bonus value of 13% 
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    //makes more than 65k but can't get a negative bonus
    // adjusted bonus value of 0%
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    //0% bonus
    //adjusted bonus value of 0%
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//

console.log(employees[2].reviewRating);





//console.log(employees[2]);
//console.log(74750 * 1.13);

//totalBonus = totalCompensation - employees.annualSalary; // equation for total bonus 



function calculateIndividualEmployeeBonus(employee) {

  if (employee.reviewRating === 5 ){

    console.log(employee);{

  }
let bonus=0;
  if (employee.reviewRating === 5 ){
    bonus +=0.10;
  }
  if (employee.reviewRating === 4 ){
    bonus += 0.06;}
  if (employee.reviewRating === 3 ){
    bonus +=0.04;}
  if (employee.reviewRating <= 2 ){
     }
 }
 if (employee.employeeNumber.length==4){
  bonus + 0.05;
  return bonus;
}

  //for (i=0;employee.length;i++){


  }

  
 function bonusFunction(bonusPercent){

  if (employee.reviewRating === 5 ){
    console.log(bonusR =10);
  }
  if (employee.reviewRating === 4 ){
    return bonusR = 6;}
  if (employee.reviewRating === 3 ){
    return bonusR =4;}
  if (employee.reviewRating <= 2 ){
    return bonusR = 0;}
 }



function bonusPayY(years){
  if (employees.employeeNumber.length==4){
    bonusY = 5;
    return bonusY;
  }
}

function combinedBonus(RR,EN,CC){
  let bonus ={
    RR: reviewRating,
    EN: employeeNumber,
    CC: compensationCap
  }
  employees.push(bonus);
  return bonus;

  
 

/*
 function digitBonus(bonusYears){
if (employee.employeeNumber <= 9999)

 }
 */

 //totalBonus = employee.annualSalary * bonus *0.01 + 1
 console.log(1.06* 35000);
 //totalCompensation = employee.annualSalary   //bonus multiplied by 0.01 + 1 
 
// 13*0.01 = 0.13 +1= 1.13
//1.13* employee.annualSalary[2]

 // your logic here
  
  
  // return new object with bonus results






/*

2 or below no bonus
3-5 4/6/10%


employee number means been there longer than 15 years and get additional 5%
if salary greater than 65,000 .99
bonus have to be greater 0% less than 13%

Those who have a rating of a 2 or below should not receive a bonus.
Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
No bonus can be above 13% or below 0% total. */}
