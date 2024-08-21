let cool = document.getElementById("cool");
let meaning = document.getElementById("meaning");

cool.onclick = function () {
  if (meaning.innerHTML === "") {
    meaning.innerHTML =
      '<p class="meaning">*A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards</p>';
  } else {
    meaning.innerHTML = "";
  }
};

let input = document.getElementById("text-input");
let button = document.getElementById("check-btn");
let result = document.getElementById("result");

button.onclick = function () {
  let text = input.value;
  if (text === "") {
    result.innerHTML = "";
    alert("Please input a value");
    return;
  }
  let textArray = text
    .split("")
    .filter(
      (char) =>
        char !== " " &&
        char !== "," &&
        char !== "." &&
        char !== "_" &&
        char !== "-" &&
        char !== "(" &&
        char !== ")" &&
        char !== "/" &&
        char !== "\\",
    );
  let reversedTextArray = textArray.slice().reverse();
  textArray = textArray.join("").toLowerCase();
  console.log(textArray);
  reversedTextArray = reversedTextArray.join("").toLowerCase();
  console.log(reversedTextArray);
  if (textArray === reversedTextArray) {
    result.innerHTML = `<p class="meaning">${text} is a palindrome</p>`;
  } else {
    result.innerHTML = `<p class="meaning">${text} is not a palindrome</p>`;
  }
};
