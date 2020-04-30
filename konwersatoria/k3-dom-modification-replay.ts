// pobieranie elementów ze struktury DOM
const body = document.body

// pobieranie po znaczniku
// html: <footer> Stopka </footer>
const footer = document.querySelector('footer');

// pobieranie po id
// w html: <button id="login">Zaloguj</button>
const loginButton: HTMLElement = document.getElementById('login');
const loginButton2: HTMLElement = document.querySelector('#login');
// pobieranie po klasie css
// <div class="red"></div>

// kolekcja elementów z klasą red
const redEls: Element[] = [...document.getElementsByClassName('red')];

// pierwszy element z klasą red
// zakładamy że jest to <input type="text" class="required">
const redEl2: HTMLInputElement  = document.querySelector('.required');
console.log(redEl2.value);

//chcemy kolekcję elementów z klasą red
const redEls2: Element[] = [...document.querySelectorAll('.red')];

// zmiana wartości
body.innerHTML = '<b>nowa zawartość</b>';
body.innerText = 'nowa czysto tekstowa zawartość';

// zmiana stylu css elementu
loginButton.style.margin = "10px";
loginButton.style.paddingBottom = "20px";

// zmiana klasy css elementu
// zmiana className nadpisuje poprzednie klasy
loginButton.className = 'red required'
// obiekt .classList
// dodanie klasy do listy już istniejących klas w elemencie
loginButton.classList.add('to-validate');
// usunięcie klasy
loginButton.classList.remove('red')
// przełączanie klasy
loginButton.classList.toggle('required');


// tworzenie nowego elementu DOM
const newInput = document.createElement('input')

// dołączanie elementu do struktury DOM
// dodanie jako ostatnie dziecko rodzica - rodzicem tutaj jest body
body.appendChild(newInput);
// footer.appendChild(newInput);
// na sztywno:
body.innerHTML += '<input type="text>'

// dodanie przed innym elementem - tutaj wrzuć przed <footer>
body.insertBefore(newInput, footer)

// zmiana atrybutów elementu (id etc)
newInput.id = "passField"
newInput.setAttribute('type', 'password')

// z czatu:
const vinik: string = (<HTMLInputElement>(
    document.querySelector("input[name=vinCode]")
  )).value;

// inny sposób
const vinInput: string = document.querySelector<HTMLInputElement>("input[name=vinCode]").value;