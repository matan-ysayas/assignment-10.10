
//*********************************--1--**************************************** */

//!1.	צרו פונקציה שמקבלת מספרים מהמשתמש, עד שהמשתמש מכניס 0, הדפיסו למסך את המספר הגדול ביותר ואת המספר הקטן ביותר.


// const qustionOne=document.getElementById("qustionOne");
// let lowestNumber=0;

// function numberCheck(){
//     let userNumber=Number(prompt("enter number"));
//     let someArray=[];
//     while(userNumber!=0){
//         userNumber=Number(prompt("enter number"));
//         someArray.push(userNumber);
//         console.log(someArray);
        
//     };
//     if(userNumber==0){
//         qustionOne.innerText+=`higher:${ Math.max(...someArray)}`
//         qustionOne.innerText+=`lower:${ Math.min(...someArray)}`
//     }

// };

// numberCheck();


//***************************--2--****************************************** */
//!2.	צרו פונקציה שמקבלת 10 מספרים מהמשתמש, המספרים נכנסים למערך שמודפס למסך, הפונקציה מחזירה בסוף מערך של מספרים זוגיים בלבד.
// const questionTwo=document.getElementById("questionTwo");
// let counter=0

// let arrayOfNum=[];
// let equalArray=[];

// function only(){
//     for(let i=0;i<10;i++){
//      arrayOfNum.push(prompt("enter number"));
//     };
//      questionTwo.innerText+=` all numbers:${arrayOfNum}`;

//     for(let j=0;j<arrayOfNum.length;j++){
//         if(arrayOfNum[j]%2==0){
//             equalArray.push(arrayOfNum[j]);
//         }
       
//     };
//     questionTwo.innerText+=` equal numbers:${equalArray}`;
// };

// only();

//****************************--3--************************************************** */
//!3.	צרו פונקציה שמקבלת מספר מהמשתמש, הפונקציה יוצרת מערך של 100 מספרים רנדומליים ובודקת האם המספר קיים במערך, במידה וכן יש להדפיס למסך הודעת הצלחה והודעת כישלון במידה ולא.

// const questionThree=document.getElementById("questionThree");
// let randomArray=[];

// function randomNumCheck(useNumber){
// for(let i=0;i<100;i++){
//     randomArray.push(Math.round(Math.random()*100));
// };
// console.log(randomArray);
//  for(let j=0;j<randomArray.length;j++){
//      if(useNumber==randomArray[j]){
//       return  questionThree.innerText=`The number appears in the array`
      
//      }else{questionThree.innerText=`The number is not appears in the array`}
//  };

// }


// randomNumCheck(Number(prompt("enter number")));

//******************************--4--***************************************************************** */

//!4.	צרו פונקציה שמקבלת מהמשתמש שם פרטי, הפונקציה מקבלת מבחוץ מערך של אותיות באותיות באנגלית, ובודקת באיזה אות מתחיל השם של המשתמש, במידה והשם מתחיל ב A הדפיסו "NICE"   ובמידה השם מתחיל ב Z הדפיסו "GOOD".

// const questionFour=document.getElementById("questionFour")
// const ArrayOfLetters=["a","b","c","d","z"];

// function lettersCheck(userName){
//     for(let i=0;i<ArrayOfLetters.length;i++){
//         if(userName.indexOf("a")==0&ArrayOfLetters[i]=="a"){
//         questionFour.innerText=`nice`
//     }else if(userName.indexOf("z")==0&ArrayOfLetters[i]=="z"){
//         questionFour.innerText=`good`

//     }
// };
  
// };

// lettersCheck(prompt("enter name"));


//**************************--5--************************************************************************* */


//!5.	שאלת ראיון: כתבו פונקציה שבתוכה נמצאת  לולאה שמבצעת עד 100 איטרציות, תוך כדי שהיא מדפיסה "fizz" במכפלה של 3, "buzz" במכפלות של 5, ו-"fizzbuzz" במכפלות של 3 ו-5.

//  function printToLog(){
//      for(let i=1;i<100;i++){
//          if(i%3==0){
//              console.log("fizz");
//            console.log("fizzbuzz" ); 
//          }
//          if(i%5==0){
//              console.log("buzz");
//              console.log("fizzbuzz" ); 
//          }else{
//              console.log(i);
//          }
//      }
//  };
//  printToLog();

//********************************--6--************************************************************ */























//***********************************--10--*******************************************************************
//! תרגילי מחלקות :1.	צרו מחלקה של מרצה, עם שדות של שם פרטי, שם משפחה, שכר שעתי, שעות עבודה בשבוע וטלפון.
//!2.	הוסיפו בנאי.
//!3.	צרו 3 אובייקטים.
//!4.	צרו במחלקה פונקציה שמדפיסה את המידע של האובייקט בצורה יפה ללוג.

// class professor {
//     name;
//     lastName;
//     hourPay;
//     hoursWeekly;
//     phoneNumber;
//     constructor(profesoorName,professorLastName,professorHourPay, professorHoursWeekly, professorPhoneNumber) {
//       this.name = profesoorName;
//       this.lastName = professorLastName;
//       this.hourPay = professorHourPay;
//       this.hoursWeekly = professorHoursWeekly;
//       this.phoneNumber = professorPhoneNumber;
//     }
//     printToLog = function () {
//       console.log(
//         this.name,
//         this.lastName,
//         this.hourPay,
//         this.hoursWeekly,
//         this.phoneNumber
//       );
//     };
//     PaymentPerWeek= function () {
//       return this.hoursWeekly;
//     };
    
//   }
  
//   const professor1 = new professor("matan", "ysayas", 10000, 300000, "656565656");

//   const professor2 = new professor("avi", "bob", 4545, 44555666, "0454456884549");

//   const professor3 = new professor("ben", "fd", 74411, 744545, "071544545");
  

//   professor1.printToLog();

//   professor2.printToLog();

//   professor3.printToLog();
  
  
//   console.log(professor1.PaymentPerWeek());
  
  //!7.	צרו טופס של מרצה, עם התייחסות לשדות במחלקה מרצה.
//!לחיצה על שלח יוצרת מופע של מרצה, עם אותם שדות.
//!האובייקט יודפס ללוג.
//!האובייקט יודפס למסך
//!8.	הציגו טבלה עם הנתונים.

  

// const fisrtName=document.getElementById("firstName");
// const lastName=document.getElementById("lastName");
// const hourPay=document.getElementById("hourPay");
// const hoursWeekly=document.getElementById("hoursWeekly");
// const phoneNumber=document.getElementById("phoneNumber");
// const submitBtn=document.getElementById("submitBtn");
// const studentTable=document.getElementById("studentTable");
// const studentForm=document.getElementById("studentForm");
// const studentDisplay=document.getElementById("studentDisplay");



// const professors=[];

// submitBtn.onclick=()=>{
//     professors.push( new professor(firstName.value,lastName.value,hourPay.value,hoursWeekly.value,phoneNumber.value));
//  console.log(professors);

// for(const professor of professors){
//     for( const professorItem in professor){
//         studentTable.innerHTML+=`<tr><td>${professorItem}:${professor[professorItem]}</td></tr>`
//      };
  
// };

//     };













