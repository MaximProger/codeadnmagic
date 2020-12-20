(function () {
  // Return random number in range
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  // Return Uniq Array Value
  function getArrayUniqValue(array, currValue) {
    let uniqValue = array.filter((item) => item != currValue);
    let arrayValue = uniqValue[getRandomIntInclusive(0, uniqValue.length - 1)];
    currValue = arrayValue;
    return arrayValue;
  }

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

    wizardElement.querySelector(".setup-similar-label").textContent =
      wizard.name;
    wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
    wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;

    return wizardElement;
  }

  let fragment = document.createDocumentFragment();
  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  setupSimilarList.appendChild(fragment);

  // Setup Popup
  const setup = document.querySelector(".setup");
  const setupClose = document.querySelector(".setup-close");
  const setupOpen = document.querySelector(".setup-open");
  const setupOpenIcon = document.querySelector(".setup-open-icon");

  let openPopup = function () {
    setup.classList.remove("hidden");
  };

  let closePopup = function () {
    setup.classList.add("hidden");
  };

  setupOpen.addEventListener("click", function () {
    openPopup();
  });

  setupOpenIcon.addEventListener("keydown", function (evt) {
    if (evt.keyCode == 13) {
      openPopup();
    }
  });

  setupClose.addEventListener("click", function () {
    closePopup();
  });

  setupClose.addEventListener("keydown", function (evt) {
    if (evt.keyCode == 13 && !setup.classList.contains("hidden")) {
      closePopup();
    }
  });

  document.addEventListener("keydown", function (evt) {
    if (evt.keyCode == 27 && evt.target.className != "setup-user-name") {
      closePopup();
    }
  });

  // Submit
  const setupSubmitBtn = document.querySelector(".setup-submit");
  const setupWizardForm = document.querySelector(".setup-wizard-form");

  setupSubmitBtn.addEventListener("keydown", function (evt) {
    if (evt.keyCode == 13 && !setup.classList.contains("hidden")) {
      setupWizardForm.submit();
    }
  });

  // Switch colors
  const setupWizardCoat = document.querySelector(".setup-wizard .wizard-coat");

  setupWizardCoat.addEventListener("click", function () {
    let getCoatColor = getArrayUniqValue(coatColors, this.style.fill);
    this.style.fill = getCoatColor;
  });

  // Switch eyes
  const setupWizardEye = document.querySelector(".setup-wizard .wizard-eyes");

  setupWizardEye.addEventListener("click", function () {
    let getEyeColor = getArrayUniqValue(eyesColors, this.style.fill);
    this.style.fill = getEyeColor;
  });

  // Switch fireball
  const fireballColor = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];
  const setupWizardFireball = document.querySelector(".setup-fireball-wrap");

  setupWizardFireball.addEventListener("click", function () {
    let getFireballColor = getArrayUniqValue(
      fireballColor,
      this.style.background
    );
    this.style.background = getFireballColor;
  });

  // Validation Name
  const setupUserName = document.querySelector(".setup-user-name");

  setupUserName.addEventListener("input", function (evt) {
    let target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity("Имя должно состоять минимум из 2-х символов");
    } else if (target.value.length > 25) {
      target.setCustomValidity(
        "Имя должно состоять максимум из 25-ти символов"
      );
    } else {
      target.setCustomValidity("");
    }
  });
})();
