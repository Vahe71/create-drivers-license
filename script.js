const globalName = document.querySelector('.infoPanel .name');
const globalSurname = document.querySelector('.infoPanel .surname');
const globalFathersName = document.querySelector('.infoPanel .fathersname');
const globalBirthDate = document.querySelector('.infoPanel .birthDate');
const globalTerm = document.querySelector('.infoPanel .term');
const createButton = document.querySelector('.infoPanel .create');
const globalCheckBox = document.querySelectorAll('.infoPanel .checkbox');
const globalUrl = document.querySelector('.infoPanel .url');
const categories = document.querySelector('.content .card .card-content .body-content .categories');
const innerNameFName = document.querySelector('.content .card .card-content .body-content .info-panel .name-fatherName');
const innerSurname = document.querySelector('.content .card .card-content .body-content .info-panel .surname');
const innerBirthdCountry = document.querySelector('.content .card .card-content .body-content .info-panel .birthDate-country');
const innerTerm = document.querySelector('.content .card .card-content .body-content .info-panel .term');;
const cardId = document.querySelector('.content .card .card-content .body-content .card-id');
const picture = document.querySelector('.content .card .card-content .body-content .person-picture');
const errorPanel = document.querySelector('.error-panel');
const closeErrorPanel = document.querySelector('.error-panel .close');
const cardBodyContent = document.querySelector('.content .card .card-content .body-content');

let categArray = ['A', 'B', 'C', 'D', 'E'];
let engLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
class License {
    constructor(name, surname, fathersName, birthDate, term, url) {
        this.name = name;
        this.surname = surname;
        this.fathersName = fathersName;
        this.birthDate = birthDate;
        this.term = term;
        this.checkeds = this.getChecks();
        this.cId = engLetters[Math.round(Math.random() * 25)] + engLetters[Math.round(Math.random() * 25)] + Math.round(100000 + (Math.random() * 899999));
        this.url = url;
    }
    getChecks() {
        let checkeds = [];
        globalCheckBox.forEach((item) => {
            checkeds.push(item.checked);
        });
        return checkeds;
    }
    writeInfo() {
        if (globalName.value && globalSurname.value && globalFathersName.value && globalBirthDate.value && globalTerm.value && globalUrl.value) {
            for (let i = 0; i < this.checkeds.length; i++) {
                if (this.checkeds[i]) {
                    console.log(i);
                    categories.children[i].innerText = categArray[i];
                } else {
                    categories.children[i].innerText = '*';
                }
            }
            innerSurname.innerHTML = `${this.surname}<br>${translate(this.surname)}`.toUpperCase();
            innerNameFName.innerHTML = `${this.name} ${this.fathersName}<br> ${translate(this.fathersName.slice(0, this.fathersName.length - 1))}`.toUpperCase();
            innerBirthdCountry.innerHTML = `${this.birthDate}, ????????????????<br>ARMENIA`
            let date = new Date();
            innerTerm.innerHTML = `<span>${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}</span>
                               <span>${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear() + Number(this.term)}</span>`;
            cardId.innerHTML = this.cId;
            picture.src = 'img/' + this.url + '.jpg';
            cardBodyContent.style.opacity = 1;
        } else {
            errorPanel.style.display = 'block';
            closeErrorPanel.addEventListener('click', () => errorPanel.style.display = 'none');
        }
    }
}

createButton.addEventListener('click', () => {
    let licenseObj = new License(globalName.value, globalSurname.value, globalFathersName.value, globalBirthDate.value, globalTerm.value, globalUrl.value);
    licenseObj.writeInfo();
});

document.body.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        let licenseObj = new License(globalName.value, globalSurname.value, globalFathersName.value, globalBirthDate.value, globalTerm.value, globalUrl.value);
        licenseObj.writeInfo();
    }
});

const _engArmLetters = [["??", "a"], ["??", "b"], ["??", "g"], ["??", "d"], ["??", "e"], ["??", "z"], ["??", "e"], ["??", "y"], ["??", "t'"], ["??", "zh"], ["??", "i"], ["??", "l"], ["??", "kh"], ["??", "ts"], ["??", "k"], ["??", "h"], ["??", "dz"], ["??", "gh"], ["??", "ch'"], ["??", "m"], ["??", "y"], ["??", "n"], ["??", "sh"], ["??", "o"], ["??", "ch"], ["??", "p"], ["??", "j"], ["??", "r"], ["??", "s"], ["??", "v"], ["??", "t"], ["??", "r"], ["??", "c"], ["????", "u"], ["??", "p'"], ["??", "k"], ["??", "ev"], ["??", "o"], ["??", "f"], ["??", "A"], ["??", "B"], ["??", "G"], ["??", "D"], ["??", "E"], ["??", "Z"], ["??", "E"], ["??", "Y"], ["??", "T'"], ["??", "Zh"], ["??", "I"], ["??", "L"], ["??", "Kh"], ["??", "Ts"], ["??", "K"], ["??", "H"], ["??", "Dz"], ["??", "Gh"], ["??", "Ch"], ["??", "M"], ["??", "Y"], ["??", "N"], ["??", "Sh"], ["??", "O"], ["??", "Ch"], ["??", "P"], ["??", "J"], ["??", "R"], ["??", "S"], ["??", "V"], ["??", "T"], ["??", "R"], ["??", "C"], ["????", "U"], ["??", "P'"], ["??", "K"], ["????", "Ev"], ["??", "O"], ["??", "F"]];

function translate(armString) {
    if (armString != '' && armString != ' ') {
        let returnString = '';
        for (let strLett = 0; strLett < armString.length; strLett++) {
            for (let letter = 0; letter < _engArmLetters.length; letter++) {
                if (armString[strLett] == '??' && armString[strLett + 1] == '??') {
                    returnString += 'u';
                    break;
                }
                else if (armString[strLett] == '??' && armString[strLett + 1] == '??') {
                    returnString += 'U';
                    break;
                }
                else if (armString[strLett] == ' ') {
                    returnString += ' ';
                    break;
                } else if (armString[strLett] == _engArmLetters[letter][0]) {
                    returnString += _engArmLetters[letter][1];
                    break;
                }
            }
        }
        return returnString;
    }
}




















