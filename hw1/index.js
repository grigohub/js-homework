/* 
    Task 1 : 
    ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .

    გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
    განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
    'ანა ლევანზე 7 წლით უფროსია'
    სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
    დალოგეთ ზემოაღნიშნული ცვლადი . 
*/

let nameA="ანა";
let nameL="ლევან";
let ageA=28;
let ageL=21;
console.log(nameA+" "+nameL+"ზე "+(ageA-ageL)+" წლით უფროსია")

/*
    Task 2 : 
        გვაქვს სტუდენტების სახელების მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
        დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.

*/
console.log('\n')
let arr=['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
if (arr.length%2==1) {
console.log(arr[Math.ceil(arr.length/2-1)])
} else console.log(arr[arr.length/2-1]+" & "+arr[arr.length/2])

/*
    Task 3 : 
    Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
    firstname,lastname - string type
    age - number
    subject - object (array of strings)
    roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )

    მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან

    Part 2 : 
        for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.

        ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.

        ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
         
        დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
        

*/
console.log('\n')

let person={
    firstName:"Sam",
    lastName:"Smith",
    pronouns:["they",'them','their','theirs'],
    age:30,
    subject:["english","math","chemistry","art","history","biology","music"],
    roommate:{
        fullName:"Timothy Lee McKenzie",
        age:33
    }
}
let i=0;
for(let i=0; i<person.subject.length;i++ ) {
    console.log(person.subject[i]);
     
}
person.fullName = person.firstName+' '+person.lastName;
console.log(person.fullName+" is "+person.age+"yo  and "+person.pronouns[2]+" roomate is "+person.roommate.fullName)

/*
    Task 4 : 
        გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
        გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
        დალოგეთ ეს ელემენტი.

*/
console.log('\n')
let arr1=["Banana", "Orange", "Apple", "Mango",2,12]
let j=0
while(typeof arr1[j]=== 'string'){
    console.log(arr1[j]);
    j++;
}
/*
    Task 5 : 
    გვაქვს მასივი : [12,23,43,11,9,2,121,90]
    თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
    თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'

*/

console.log('\n')
arr2=[12,23,43,11,9,2,121,90]
 for(let k=0; k<arr2.length;k++){
     if (arr2[k]>31 && arr2[k]%2==0) console.log(arr2[k]+' is greater than provided value and is EVEN')   
    if(arr2[k]<31 && arr2[k]%2==1) console.log(arr2[k]+' is less than provided value and is ODD')
 }
 