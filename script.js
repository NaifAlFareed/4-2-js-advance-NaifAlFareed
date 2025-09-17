/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
const student = {
   firstName: "Naif",
   lastName: "AlFareed",
   _gpa: 3.2,
   get fullName() {
      return this.firstName + " " + this.lastName;
   },
   get gpa() {
      return this._gpa;
   },
   set gpa(value) {
      if (value >= 0 && value <= 4) {
         this._gpa = value;
      } else {
         console.log("Invalid GPA, must be 0.0–4.0");
      }
   }
};
console.log("TODO-1 fullName:", student.fullName);
console.log("TODO-1 GPA before:", student.gpa);
student.gpa = 3.9;
console.log("TODO-1 GPA after:", student.gpa);


// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const courses = {
   SWE363: "Web Engineering",
   ICS343: "Computer Networks",
   COE301: "Computer Organization"
};
for (const code in courses) {
   console.log("TODO-2:", code, "→", courses[code]);
}
// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
const text = "Hello World";
console.log("TODO-3 length:", text.length);
console.log("TODO-3 charAt(0):", text.charAt(0));
console.log("TODO-3 charAt(6):", text.charAt(6));
// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
const today = new Date();
console.log("TODO-4 day:", today.getDate());
console.log("TODO-4 month (0–11):", today.getMonth());
console.log("TODO-4 year:", today.getFullYear());
// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
const nums = [5, 12, -3, 44, 8, 99, 0, 17, 23, 7];
console.log("TODO-5 min:", Math.min(...nums));
console.log("TODO-5 max:", Math.max(...nums));
// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/
function maxValue(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array must be non-empty");
  }
  return Math.max(...arr);
}
try {
  console.log("TODO-6 maxValue of [3,9,2]:", maxValue([3,9,2]));
  console.log("TODO-6 maxValue of []:", maxValue([]));
} catch (e) {
  console.log("TODO-6 caught error:", e.message);
} finally {
  console.log("TODO-6 finally always runs");
}
// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/
const words = ["ban", "babble", "make", "flab"];
const pattern = /ab/;
words.forEach(word => {
  if (pattern.test(word)) {
    console.log("TODO-7:", word, "matches!");
  }
});
// End of Advance JavaScript Lab — good luck!
