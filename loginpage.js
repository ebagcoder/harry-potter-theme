// Change input placeholders
document.querySelector('#username').setAttribute('placeholder', 'Enter Wizard Name');
document.querySelector('#password').setAttribute('placeholder', 'Enter Password Charm');

// Change checkbox label
const rememberMeLabel = document.querySelector('label[for="rememberMe"]');
if (rememberMeLabel) rememberMeLabel.textContent = 'Keep Me Enchanted';

// Change button labels
const signInButton = document.querySelector('.loginButton');
if (signInButton) signInButton.textContent = 'Cast Sign-In Spell';

const secondaryButtons = document.querySelectorAll('.secondaryButton');
if (secondaryButtons[0]) secondaryButtons[0].textContent = 'Floo Network Connection';
if (secondaryButtons[1]) secondaryButtons[1].textContent = 'Forgot Your Spell?';
