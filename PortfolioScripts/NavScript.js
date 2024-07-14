const navLinks = document.getElementsByClassName('navLinks');
const responsiveNavLinks = document.getElementsByClassName('responsiveNavLinks');
const hrDiv = document.getElementById('hrDiv');
const navCont = document.getElementById('navCont');
const darkBgNavDiv = document.getElementById('darkBgNavDiv');

const HomeNavLinksArray = [
    'Home.html',
    'PortfolioEmbPages/Gallery/Gallery.html'
];
const EmbPagesNavLinksArray = [
    '../../Home.html',
    '../Gallery/Gallery.html'
];

for (let i = 0; i < navLinks.length; i++) {
    if (window.location.href.includes("Home.html")) {navLinks[i].onclick = function() {window.location.href = HomeNavLinksArray[i];}}
    else {navLinks[i].onclick = function() {window.location.href = EmbPagesNavLinksArray[i];}}
}
for (let i = 0; i < responsiveNavLinks.length; i++) {
    if (window.location.href.includes("Home.html")) {responsiveNavLinks[i].onclick = function() {window.location.href = HomeNavLinksArray[i];}}
    else {responsiveNavLinks[i].onclick = function() {window.location.href = EmbPagesNavLinksArray[i];}}
}

hrDiv.onclick = function() {
    darkBgNavDiv.style.display = 'block';
    navCont.style.display = 'block';
    navCont.style.right = '0px';
    navCont.style.width = '300px';
}
darkBgNavDiv.onclick = function() {
    darkBgNavDiv.style.display = 'none';
    navCont.style.right = '-100px';
    navCont.style.width = '0px';
}