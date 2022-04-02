"use strict";

let numOne = prompt("1-sonni kiriting ...");
let numTwo = prompt("2-sonni kiriting ...");
let numThree = prompt("3-sonni kiriting ...");

if (numOne > numTwo && numThree > numOne) {
  alert(`O'rtacha son qiymati ${numOne}`);
} else if (numOne > numThree && numTwo > numOne) {
  alert(`O'rtacha son qiymati ${numOne}`);
} else if (numTwo > numThree && numOne > numTwo) {
  alert(`O'rtacha son qiymati ${numTwo}`);
} else if (numTwo > numOne && numThree > numTwo) {
  alert(`O'rtacha son qiymati ${numTwo}`);
} else if (numThree > numOne && numTwo > numThree) {
  alert(`O'rtacha son qiymati ${numThree}`);
} else if (numThree > numTwo && numOne > numThree) {
  alert(`O'rtacha son qiymati ${numThree}`);
} else {
  alert(`Yana bir bor urinib ko'ring`);
}
