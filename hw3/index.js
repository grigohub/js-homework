//task 1
/*  
    დაწერეთ ფუნქცია რომელიც მიიღებს ორ რიცხვს და აღნიშნული ფუნქცია
    დააბრუნებს ამ ორი რიცხვის უდიდეს საერთო გამყოფს . 
    იგივე ფუნქცია დაწერეთ რეკურსიული ფუნცქიის გამოყენებით იპოვეთ უდიდესი საერთო გამყოფი 
    gcd(a,b)
    
*/
function gcd(a,b) {
    if(b == 0) {
     return a;
    } 
   return gcd(b,Math.round(a%b))
   }
//Task 2 
/*
დაწერეთ ფუნქცია ციფრების ჯამი , sumOfDigits(n) რომელიც იღებს ერთ პარამეტრს 
და აბრუნებს გადაცემული მნიშვნელობის შემადგენელი ციფრების ჯამს . 
sumOfDigits(1312) = 1+3+1+2 = 7;

აღნიშნული დავალება შეასრულეთ ორნაირად , როგორც ჩვეულებრივი ასევე რეკურსიული
ფუნქციის გამოყენებით . 

*/
 


 function sumOfdigits(n) {
     if( n < 10) {
       return n;
    }
 return Math.round(n%10) + sumOfdigits(Math.floor(n/10))
}
//Task 3
/*
    გვაქვს factory ობიექტი , რომელსაც აქვს რამდენიმე key-value წყვილი , 
    ასევე მეთოდი calculateWorkload - აბრუნებს მხოლოდ თანამშრომლის შესრულებული სამუშაოების მასივს (მაგალითის მიხედვით [40,25,28,30,31])
    და formatArray - რომელსაც გადაეცემა თანამშრომლის სახელი და აბრუნებს  ობიექტს თანამშრომლის სახელი  და ხელშეკრულების ამოწურვამდე
    დარჩენილი დროის მნშვნელობებით. ხელშეკრულების პერიოდი ყველა თანამშრომლისთვის არის 5 წელი. 
    მაგალითად ('John' ის შემთხვევაში დაგვიბრუნდება {name : "John", timeLeft : 4}) timeleft = 5 - timespent;
    გვაქვს 
    დალოგეთ calculateWorkload და formatArray შედეგები; 
    !!!აუცილებლად გამოიყენეთ bind მეთოდი
*/
 let factoryEmployees = {
    employees : [{name : "John", timeSpent : 1 } , {name : "Sam", timeSpent : 3 },{name : "Maria", timeSpent : 2 },{name : "Dan", timeSpent : 4 },{name : "Lorelai", timeSpent : 5 }],
    employeeNum : this.employees.length,
 }
     let emp = factory.formatArray.call(factoryEmployees,'John');
     console.log(emp)

let workloadData = {
    employeeWeeklyWorkload : [{name : "John", timeSpent : 40 } , {name : "Sam", timeSpent : 25 },{name : "Maria", timeSpent : 28 },{name : "Dan", timeSpent : 30 },{name : "Lorelai", timeSpent : 31 }]
}

 let test = factory.calculateWorkload.bind(workloadData)

console.log(test())

//Task 4

/*
დაწერეთ ფუნქცია sumOfNumbers , რომელიც დააბრუნებს გადაცემული არგუმენტების ჯამს
აღნიშნული ფუნქცია გაუშვით applyს საშუალებით, შესაბამისად არგუმენტებიც applyს მეშვეობით უნდა გადაცეთ.

hint :  თუ კი ფუნქციაში არ გვაქვს this ქივორდის საჭიროება და შესაბამისად ობიექტი რომელსაც
thisმა უნდა მიუთითოს შეგიძლიათ apply call-ს პირველი არგუმენტად გადასცეთ null 


*/
function sumOfNumbers(a,b,c) {
 let sum = 0;
  for(let i = 0 ; i< numbers.length; i++) {
      sum += numbers[i]
   }
  return sum;
 }
console.log(sumOfNumbers.apply(null,[10,20,30]))
//Task 5
/*
დაწერეთ რეკურსიული ფუნქცია checkIfEven(n) . აბრუნებს გადაცემული მნიშვნელობა
არის თუ არა ლუწი . აუცილებლად გამოიყენეთ რეკურსია

*/
 function checkIfEven(n) {
    if(n == 0) {
       return 'Even'
   } else if (n == 1) {
        return "Odd"
   }
  return checkIfEven(n-2)
}