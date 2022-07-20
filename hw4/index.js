//Task 1

/*
დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
მაგალითად
arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
უმჯობესია გამოიყენოთ reduce მეთოდი

*/
 let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// // // // // // /**
// // // // // //  * element = 'a';
// // // // // //  * let acc = {
// // // // // //  *     3 : 1,
// // // // // //  *     'a' : 3,
// // // // // //  * 2 :1
// // // // // //  * }
// // // // // //  */

// // // // // // function getSeq (arr) {
// // // // // //     let result = arr.reduce((acc,element)=>{
// // // // // //         if(acc[element]){
// // // // // //             acc[element]++;
// // // // // //         } else {
// // // // // //             acc[element] = 1;
// // // // // //         }
// // // // // //         return acc;
// // // // // //     },{})
// // // // // //     return result;
// // // // // // }

// // // // // // let seqObj = getSeq(arr1);
// // // // // // let max = seqObj['3']; //4
// // // // // // // /{ '2': 2, '3': 4, '4': 1, '9': 1, a: 5 }
// // // // // // console.log(seqObj)
// // // // // // let key = '';
// // // // // // for(let el in seqObj) {
// // // // // //     if(seqObj[el] > max) {
// // // // // //         max = seqObj[el]
// // // // // //         key = el;
// // // // // //     }
// // // // // // }
/*
Task 2 : 
დაწერეთ ფუნქცია რომელიც იღებს რაღაც ციფრების მიმდევრობას (სტრინგად ან რიცხვად) პარამეტრად , ჩასვით ტირეები (-) ყოველ ორ ლუწ რიცხვს შორის. 
მაგალითად 025468 უნდა დაგვიბრუნდეს როგორც 0-254-6-8


*/
// // // // // // let newVal = ''+numTxt;

// // // // // function addDash(val) {
// // // // //     let convertVal = ''+val; //'2456'
// // // // //     let result = '';
// // // // //     for(let i = 0; i< convertVal.length-1;i++) {
// // // // //         if(Number(convertVal[i]) % 2 ===0 && Number(convertVal[i+1]) % 2 === 0){
// // // // //             result += convertVal[i] + '-';
// // // // //             //2-
// // // // //         } else result += convertVal[i]
// // // // //         //2-456
// // // // //     }
// // // // //     console.log(result)

// // // // // }

// // // // // addDash('02546');



/*
Task 3 : 
დაწერეთ ფუნქცია რომელიც იღებს ორ მასივს და უნდა დაგვიბრუნოს 
ამ ორი მასივის დამერჯილი მასივი , გაერთიანებული , არადუბლირებული მნიშვნელობებით .
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

შედეგი უნდა იყოს : [1,2,3,30]
// // // // let array1 = [1, 2, 3];
// // // // let array2 = [2, 30, 1];

// // // // let mergedArr = array1.concat(array2);
// // // // console.log(mergedArr)
// // // // let result = [];
// // // // for(let i = 0; i<mergedArr.length; i++) {
// // // //     if(result.includes(mergedArr[i])) continue;
// // // //     result.push(mergedArr[i])
// // // // }

// // // // console.log(result)
*/


/*
Task 4 : 
ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
გამოიყენეთ map

*/


function readyToPutInTheDOM(arr){
    // your code here
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
 
    // // //     return arr.map((el)=> {
    // // //         let domElement = '';
    // // //         domElement = `<h1>${el.name}</h1><h2>${el.age}</h2>`;
    // // //         return domElement;
    // // //     })
    // // //   }
    // // //   console.log(readyToPutInTheDOM([
    // // //       {
    // // //           name: "Angelina Jolie",
    // // //           age: 80
    // // //       },
    // // //       {
    // // //           name: "Eric Jones",
    // // //           age: 2
    // // //       },
    // // //       {
    // // //           name: "Paris Hilton",
    // // //           age: 5
    // // //       },
    // // //       {
    // // //           name: "Kayne West",
    // // //           age: 16
    // // //       },
    // // //       {
    // // //           name: "Bob Ziroll",
    // // //           age: 100
    // // //       }
    // // //   ])); 

  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]



  /* Task 5 */

  /* 
  გვაქვს ფუნქცია sumOfDifferences(arr) , რომელიც იღებს მასივს . 
  პროგრამამ მასივი უნდა დაალაგოს კლებადობით და შემდეგ უნდა დაგვითვალოს
  მეზობელი ელემენტების სხვაობების ჯამი . 
  მაგ : [2, 1, 10]  -->  9 , რაც ნიშნავს დავალაგებდით [10,2,1] კლებადად
  შემდეგ  (10-2) + (2-1) = 8 + 1 = 9

  სორტირების ფუნქცია დაწეროთ თქვენით ან გამოიყენოთ Array.sort() მეთოდი რომელიც
  პარამეტრად იღებს compareFn ფუნქციას , შედარების ქოლბექს .
 */
// // let arr = [2, 1, 10] 
// // function sumOfDifferences(arr) {
// //     let sortedArr = arr.sort((a,b)=> b-a);
// //     let sum = 0;
// //     for(let i = 1; i< sortedArr.length; i++ ) {
// //         sum+= sortedArr[i-1] - sortedArr[i]
// //     }

// //     return sum;
    
// // }

  
