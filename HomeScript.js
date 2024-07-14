const projectsDescription = document.getElementById("projectsDescription");
const yassineDescription = document.getElementById("yassineDescription");
const email = document.getElementById("email");
const number = document.getElementById("number");
const git = document.getElementById("git");

const vocabulary = [
    ['Outstanding', 'Impressive', 'Remarkable', 'Formidable', 'Immaculate', 'Incredible'],
    ['Zealous', 'Devoted', 'Intense', 'Excited', 'Fervent', 'Ardent']
];

AlternateWords();

email.onclick = function () {Copy(email.textContent);}
number.onclick = function () {Copy(number.textContent);}
git.onclick = function () {window.open(git.textContent, 'blank');}

function Copy(textToCopy) {
    navigator.clipboard.writeText(textToCopy)
    .then(() => {alert('"' + textToCopy + '"' + " has been copied to clipboard!");})
    .catch(() => {alert("Failed to copy text! try again or try to copy manually.");});
}
function AlternateWords() {
    const changeWords = () => {
        projectsDescription.textContent = vocabulary[0][Math.floor(Math.random() * vocabulary[0].length)];
        yassineDescription.textContent = vocabulary[1][Math.floor(Math.random() * vocabulary[1].length)];
        projectsDescription.style.top = '20px';
        yassineDescription.style.top = '20px';

        setTimeout(() => {
            projectsDescription.style.top = '0px';
            yassineDescription.style.top = '0px';
            projectsDescription.style.opacity = '1';
            yassineDescription.style.opacity = '1';
            projectsDescription.style.visibility = 'visible';
            yassineDescription.style.visibility = 'visible';    
        }, 300);

        setTimeout(() => {
            projectsDescription.style.top = '-20px';
            yassineDescription.style.top = '-20px';
            projectsDescription.style.opacity = '0';
            yassineDescription.style.opacity = '0';
        }, 2800);
    };
    
    changeWords();
    setInterval(changeWords, 3000);
}