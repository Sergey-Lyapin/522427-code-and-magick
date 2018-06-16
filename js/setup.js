'use strict';

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
      name: getRandomElement(DATA_WIZARDS.names) + getRandomElement(DATA_WIZARDS.surnames),
      coatColor: getRandomElement(DATA_WIZARDS.coatColor),
      eyesColor: getRandomElement(DATA_WIZARDS.eyesColor)
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


function getRandomElement(array) {

  for (var i = 0; i < array.length; i++) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomElement = array[randomIndex];
  }

  return randomElement;
}

function openThePopup() {
  userDialog.classList.remove('hidden');
  setupSimilarWizards.classList.remove('hidden');
}

// Задание по 4 лекции:

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
var setupUserName = document.querySelector('.setup-user-name');
var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var onCoatClick = function () {

  wizardCoat.style.fill = getRandomElement(COAT_COLORS);

};

var onEyesClick = function () {

  wizardEyes.style.fill = getRandomElement(EYES_COLORS);

};

var onFireballClick = function () {

  wizardFireball.style.backgroundColor = getRandomElement(FIREBALL_COLOR);

};

var onPopupEscPress = function (evt) {

  if ((evt.keyCode === ESC_KEYCODE) && (setupUserName !== document.activeElement)) {
    closePopup();
  }
};

var onSetupCloseEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
};

var onSetupOpenEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', openPopup);
setupClose.addEventListener('click', closePopup);
setupClose.addEventListener('keydown', onSetupCloseEnterPress);
setupOpenIcon.addEventListener('keydown', onSetupOpenEnterPress);
wizardCoat.addEventListener('click', onCoatClick);
wizardEyes.addEventListener('click', onEyesClick);
wizardFireball.addEventListener('click', onFireballClick);
