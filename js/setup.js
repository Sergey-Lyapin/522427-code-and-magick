'use strict';
(function () {
  var DATA_WIZARDS = {
    numberOfWizards: 4,
    names: ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '],
    surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
  };

  var userDialog = document.querySelector('.setup');
  var setupSimilarWizards = document.querySelector('.setup-similar');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  openThePopup();
  renderWizards();

  function generateWizards() {
    var wizards = [];

    for (var i = 0; i < DATA_WIZARDS.numberOfWizards; i++) {

      wizards.push({
        name: window.getRandomElement(DATA_WIZARDS.names) + window.getRandomElement(DATA_WIZARDS.surnames),
        coatColor: window.getRandomElement(DATA_WIZARDS.coatColor),
        eyesColor: window.getRandomElement(DATA_WIZARDS.eyesColor)
      });

    }

    return wizards;
  }

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  function renderWizards() {
    var similarWizards = generateWizards();
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < similarWizards.length; i++) {
      fragment.appendChild(renderWizard(similarWizards[i]));
    }

    similarListElement.appendChild(fragment);
  }

  function openThePopup() {
    userDialog.classList.remove('hidden');
    setupSimilarWizards.classList.remove('hidden');
  }
})();
