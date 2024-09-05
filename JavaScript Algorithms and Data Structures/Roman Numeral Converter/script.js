const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");
const letters = ["I", "V", "X", "L", "C", "D", "M"];

const translateNumber = () => {
  if (isNaN(parseInt(input.value))) {
    output.innerHTML = `<p class="error">Please enter a valid number</p>`;
    return;
  }
  if (parseInt(input.value) < 1) {
    output.innerHTML = `<p class="error">Please enter a number greater than or equal to 1</p>`;
    return;
  }
  if (parseInt(input.value) > 3999) {
    output.innerHTML = `<p class="error">Please enter a number less than or equal to 3999</p>`;
    return;
  }

  const number = [...input.value].reverse();
  const romNumber = [];
  let index = 0;

  for (let i = 0; i < number.length; i++) {
    if (number[i] < "4") {
      for (let j = parseInt(number[i]); j > 0; j--) {
        romNumber.unshift(letters[index]);
      }
    } else if (number[i] >= "4" && number[i] <= "8") {
      if (number[i] > "5") {
        for (let j = parseInt(number[i]) - 5; j > 0; j--) {
          romNumber.unshift(letters[index]);
        }
      }
      romNumber.unshift(letters[index + 1]);
      if (number[i] === "4") {
        romNumber.unshift(letters[index]);
      }
    } else {
      romNumber.unshift(letters[index + 2]);
      romNumber.unshift(letters[index]);
    }
    index += 2;
  }

  output.classList.add("result");
  output.innerHTML = `
    <p class="number">${romNumber.join("")}</p>
    `;
};

button.addEventListener("click", translateNumber);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") translateNumber;
});
