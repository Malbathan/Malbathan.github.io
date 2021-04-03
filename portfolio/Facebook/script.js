function buttonLogin() {
  alert(document.getElementById('user-email-phone').value);
}
document.getElementById('button-login').addEventListener('click', buttonLogin);

function showElement() {
  const custom = document.getElementById('gender-custom');
  custom.style.display = 'flex';
}

function addEventGenderCustom() {
  const custom = document.getElementById('other');
  custom.addEventListener('click', showElement);
}
addEventGenderCustom();

function hideElement() {
  const custom = document.getElementById('gender-custom');
  custom.style.display = 'none';
}

function addEventMaleFemale() {
  const male = document.getElementById('male');
  male.addEventListener('click', hideElement);
  const female = document.getElementById('female');
  female.addEventListener('click', hideElement);
}
addEventMaleFemale();

const confirm = () => {
  const rightContent = document.querySelector('.right-content');
  const name = document.querySelectorAll('input')[2].value;
  const lastName = document.querySelectorAll('input')[3].value;
  const email = document.querySelectorAll('input')[4].value;
  const date = document.querySelectorAll('input')[6].value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  rightContent.innerHTML = ` 
    Olá, ${name} ${lastName},
    ${email}, 
    ${date},
    ${gender}
  `;
};

const validarCampos = (event) => {
  event.preventDefault();
  const el = document.getElementById('formCadastro').querySelectorAll('input');
  for (let index = 0; index < el.length; index += 1) {
    if (el[index].value === '') {
      document.getElementById('pHidden').hidden = '';
    }
  }
  confirm();
};

const facebookRegister = document.getElementById('formCadastro');
facebookRegister.addEventListener('submit', validarCampos);
