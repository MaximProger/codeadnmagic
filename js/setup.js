// Возращает случайное число в диапазоне
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

document.querySelector(".setup").classList.remove("hidden");
document.querySelector(".setup-similar").classList.remove("hidden");

// Data
const firstNames = [
  "Иван",
  "Хуан Себастьян",
  "Мария",
  "Кристоф",
  "Виктор",
  "Юлия",
  "Люпита",
  "Вашингтон",
];

const lastNames = [
  "да Марья",
  "Верон",
  "Мирабелла",
  "Вальц",
  "Онопко",
  "Топольницкая",
  "Нионго",
  "Ирвинг",
];

const coatColors = [
  "rgb(101, 137, 164)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)",
];

const eyesColors = ["black", "red", "blue", "yellow", "green"];

let wizards = [
  {
    name:
      firstNames[getRandomIntInclusive(0, firstNames.length - 1)] +
      " " +
      lastNames[getRandomIntInclusive(0, lastNames.length - 1)],
    coatColor: coatColors[getRandomIntInclusive(0, coatColors.length - 1)],
    eyesColor: eyesColors[getRandomIntInclusive(0, eyesColors.length - 1)],
  },
  {
    name:
      firstNames[getRandomIntInclusive(0, firstNames.length - 1)] +
      " " +
      lastNames[getRandomIntInclusive(0, lastNames.length - 1)],
    coatColor: coatColors[getRandomIntInclusive(0, coatColors.length - 1)],
    eyesColor: eyesColors[getRandomIntInclusive(0, eyesColors.length - 1)],
  },
  {
    name:
      firstNames[getRandomIntInclusive(0, firstNames.length - 1)] +
      " " +
      lastNames[getRandomIntInclusive(0, lastNames.length - 1)],
    coatColor: coatColors[getRandomIntInclusive(0, coatColors.length - 1)],
    eyesColor: eyesColors[getRandomIntInclusive(0, eyesColors.length - 1)],
  },
  {
    name:
      firstNames[getRandomIntInclusive(0, firstNames.length - 1)] +
      " " +
      lastNames[getRandomIntInclusive(0, lastNames.length - 1)],
    coatColor: coatColors[getRandomIntInclusive(0, coatColors.length - 1)],
    eyesColor: eyesColors[getRandomIntInclusive(0, eyesColors.length - 1)],
  },
];

// Create Similar Wizards
let setupSimilarList = document.querySelector(".setup-similar-list");
let similarWizardTemplate = document
  .querySelector("#similar-wizard-template")
  .content.querySelector(".setup-similar-item");

function renderWizard(wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
  wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;

  return wizardElement;
}

let fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

setupSimilarList.appendChild(fragment);
