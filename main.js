let state = false;
let password = document.querySelector('#password');
let passwordStrength = document.querySelector('#password-strength');
let lowerUpperCase = document.querySelector('.lower-upper-case i');
let number = document.querySelector('.one-number i');
let specialChar = document.querySelector('.one-special-char i');
let eightChar = document.querySelector('.eight-character i');

const myFunction = show => {
  show.classList.toggle('fa-eye-slash');
};

const toggle = () => {
  if (state) {
    password.setAttribute('type', 'password');
    state = false;
  } else {
    password.setAttribute('type', 'text');
    state = true;
  }
};

password.addEventListener('keyup', () => {
  let pass = password.value;
  checkStrength(pass);
});

const checkStrength = password => {
  let strength = 0;

  // IF PASSWORD CONTAINS LOWER AND UPPER CASE CHARACTER
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    strength += 1;
    lowerUpperCase.classList.remove('fa-circle');
    lowerUpperCase.classList.add('fa-check');
  } else {
    lowerUpperCase.classList.add('fa-circle');
    lowerUpperCase.classList.remove('fa-check');
  }

  //   IF PASSWORD HAS A NUMBER
  if (password.match(/([0-9])/)) {
    strength += 1;
    number.classList.remove('fa-circle');
    number.classList.add('fa-check');
  }

  //   IF PASSWORD HAS ONE SPECIAL CHARACTER
  if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/)) {
    strength += 1;
    specialChar.classList.remove('fa-circle');
    specialChar.classList.add('fa-check');
  } else {
    specialChar.classList.add('fa-circle');
    specialChar.classList.remove('fa-check');
  }

  //   IF PASSWORD IS MORE THAN 7
  if (password.length > 7) {
    strength += 1;
    eightChar.classList.remove('fa-circle');
    eightChar.classList.add('fa-check');
  } else {
    eightChar.classList.add('fa-circle');
    eightChar.classList.remove('fa-check');
  }

  if (strength == 0) {
    passwordStrength.style = 'widtth: 0%';
  } else if (strength == 2) {
    passwordStrength.classList.remove('progress-bar-success');
    passwordStrength.classList.remove('progress-bar-warning');
    passwordStrength.classList.add('progress-bar-danger');
    passwordStrength.style = 'width: 10%';
  } else if (strength == 3) {
    passwordStrength.classList.remove('progress-bar-success');
    passwordStrength.classList.add('progress-bar-warning');
    passwordStrength.classList.remove('progress-bar-danger');
    passwordStrength.style = 'width: 60%';
  } else if (strength == 4) {
    passwordStrength.classList.add('progress-bar-success');
    passwordStrength.classList.remove('progress-bar-warning');
    passwordStrength.classList.remove('progress-bar-danger');
    passwordStrength.style = 'width: 100%';
  }
};
