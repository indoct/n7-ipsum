/* Hand-coded with ♥ by SCHO (https://scho.pro) */
"use strict";

import { lines } from "./lines.js";

// DOM elements
const paraContainer = document.querySelector("#para-container");
const initialPara = document.querySelector(".initial");
const generateButton = document.querySelector(".generate-btn");
const copyButton = document.querySelector(".copy-btn");
const selectType = document.getElementById("type-select");
let randLength;
let paragraphs;
let numberInput;
let generatePara;
let resetParas;

// Random index (line) generator
const randomIndex = () => {
  return Math.floor(Math.random() * lines.length);
};

// Vary the length of the paragraphs occasionally
const returnRand = () => {
  randLength = Math.floor(Math.random() * 2) === 0 ? 4 : 5;
  return randLength;
};
// const returnRand = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   randLength = Math.floor(Math.random() * (max - min) + min);
//   return randLength;
// };

// Join lines into 1 paragraph
const randomLines = () => {
  returnRand();
  let para = [];
  for (let i = 0; i < randLength; i++) {
    para += lines[randomIndex()].line;
  }
  return para;
};

// Fix classes on the placeholder paragraph
const classMatch = () => {
  initialPara.classList.remove("initial");
  initialPara.classList.add("quote-paras");
};

// Create paragraphs depending on user input
const createPTag = (num) => {
  let paraCount = num;
  for (let i = 0; i < paraCount; i++) {
    const element = document.createElement("p");
    element.className = "quote-paras";
    paraContainer.appendChild(element);
    paragraphs = document.getElementsByClassName("quote-paras");
  }
  classMatch();
};

// Reset the paras if they've been generated already
// 1. Get input value, 2. create <p> that many times, 3. generate the paragraphs
const btnGenerate = () => {
  numberInput = Number(document.getElementById("input-box").value);

  if (!numberInput) {
    alert(`Please enter a number of ${selectType.value} to generate`);
  }
  resetParas();
  if (numberInput === 1) {
    if (selectType.value === "paragraphs") {
      classMatch();
      generatePara();
    }
    if (selectType.value === "sentences") {
      sentGen();
    }
  }
  if (numberInput > 1) {
    if (selectType.value === "paragraphs") {
      createPTag(numberInput - 1);
      generatePara();
    }
    if (selectType.value === "sentences") {
      sentGen();
    }
  }
};

generateButton.addEventListener("click", btnGenerate);

// Fill each paragraph with text
generatePara = () => {
  if (!paragraphs) initialPara.textContent = randomLines();
  else {
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].textContent = randomLines();
    }
  }
};

// Reset the DOM (delete P tags other than initial P before re-gen)
resetParas = () => {
  if (!paragraphs) return;
  else {
    for (let i = paragraphs.length - 1; i >= 1; i--) {
      paragraphs[i].remove();
    }
  }
  paragraphs[0].textContent = "";
};

// Sentence (individual lines) generator
const sentGen = () => {
  resetParas();
  numberInput = Number(document.getElementById("input-box").value);
  createPTag(numberInput);
  for (let j = 0; j < paragraphs.length - 1; j++) {
    paragraphs[j].textContent = lines[randomIndex()].line;
  }
};

// Copy text to clipboard
const copyText = () => {
  const range = document.createRange();
  range.selectNode(document.getElementById("para-container"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect
  copyButton.textContent = "Copied!";
  setTimeout(function () {
    copyButton.textContent = "Copy Text";
  }, 3000);
};
copyButton.addEventListener("click", copyText);
