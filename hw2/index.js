//Task 1
/*
    შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
    ფუნქციას გადაეცით ობიექტი არგუმეტნად 
    
    let sampleObject = {
        isItarable : false,
        sampleArray : [12,63,21,34,98,57]
    }
    თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
    თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

*/


let sampleObject = {
    isItarable : true,
    sampleArray : [12,63,21,34,98,57]
}
function function1(){
if(sampleObject.isItarable == false){
    for(let i=0;i<sampleObject.sampleArray.length;i++){
    console.log(sampleObject.sampleArray[i]);
    }
}else 
    console.log("provided array isn't itarable");
}
function1();

//Task 2
/*
    შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
    ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
    აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
    თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
    წინააღმდეგ შემთხვევაში false
    
*/
function checkPythagoras (a,b,c){
    if( a**2 + b**2 == c**2){
        console.log('true');
    }else if (c**2 + b**2 == a**2){
        console.log('true');
    }else if (a**2 + c**2 == b**2){
        console.log('true');
    }else{
        console.log('false');
    }
};

checkPythagoras (a,b,c);

//Task 3
/*
    დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
    და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
    მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
    დააბრუნოს "Min value is 2 and Max value is 75"
*/

let arrMinMax = [2,14,25,75,11,6];
function minMax (arr){
    let max = arr [0];
    let min = arr [0];
    for(let j = 0; j < arr.length; j++){
        if (arr[j] > max){
            max = arr[j];
        } else if(arr[j] < min){
            min = arr[j];
        }
    }
    return ('min value is'+ min +' and max value is '+ max);

}

minMax(arrMinMax);


//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/
function angle(x){
    if (0 < x  && x < 90){
        console.log('Acute angle');
    }else if(x == 90){
        console.log('Right angle');
    }else if (90 < x  && x < 180 ){
        console.log('Obtuse angle');
    }else if (x == 180){
        console.log('Straight angle');
    }else{
        console.log('ERROR');
    }
};
angle(147);


//Task 5
/*
    დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
    მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
    ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
    ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
    მიღებული მასივი დააბრუნებინეთ ფუნქციას .

    0-50 = F
    51-60 = E
    61-70 = D
    71-80 = C
    81-100 = A

    საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
    [{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]


*/


let students = [{name: 'student1', grade : 91}, {name:'student2' , grade : 71}, {name: 'student3', grade : 45} ]
function checkStudentGrade(){
    
    for(let i = 0; i < students.length; i++) {
        switch (students[i].grade){
        case (students[i].grade > 0 &&  students[i].grade < 50) {
            students[i].finalResult = 'F';    
        }
       case (students[i].grade >= 50 && students[i].grade< 60){
       students[i].finalResult ='E';
        }
    case (students[i].grade >= 60 && students[i].grade< 70){

        students[i].finalResult = 'D';

        case(students[i].grade >= 70 && students[i].grade< 80){
            students[i].finalResult = 'C'; 
        }
        case ((students[i].grade>= 80 && students[i].grade< 100){
            students[i].finalResult = 'A';}
            default:
                return:"what"
       
    }
    
}

checkStudentGrade();
console.log(students);