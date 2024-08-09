const dots = document.getElementsByClassName("dots");
const visitProject = document.getElementsByClassName('visitProject');
const visitLatestProject = document.getElementsByClassName('visitLatestProject');
const projectCaptionDiv = document.getElementsByClassName('projectCaptionDiv');
const iBulkCaption = document.getElementById('iBulkCaption');
const academicnexusCaption = document.getElementById('academicnexusCaption');
const logSpectrumCaption = document.getElementById('logSpectrumCaption');
const whisperCaption = document.getElementById('whisperCaption');

const projectLinks = [
    "https://darttgoblin.github.io/iBulk/iBulk.html",
    "not_available",
    "https://darttgoblin.github.io/LogSpectrum/Home.html",
];
const latestProjectLinks = ["https://darttgoblin.github.io/Whisper/Login.html"];

const iBulkCaptions = ["GalleryMedia/iBulkCaptions/home.png", "GalleryMedia/iBulkCaptions/programs.png", "GalleryMedia/iBulkCaptions/workout.png", "GalleryMedia/iBulkCaptions/nutrition.png", "GalleryMedia/iBulkCaptions/services.png", "GalleryMedia/iBulkCaptions/about.png"];
const academicnexusCaptions = ["GalleryMedia/AcademicNexusCaptions/home.png", "GalleryMedia/AcademicNexusCaptions/login.png","GalleryMedia/AcademicNexusCaptions/crud.png","GalleryMedia/AcademicNexusCaptions/addstudent.png"];
const logSpectrumCaptions = ["GalleryMedia/LogSpectrumCaptions/dashboard.png", "GalleryMedia/LogSpectrumCaptions/log.png", "GalleryMedia/LogSpectrumCaptions/report.png", "GalleryMedia/LogSpectrumCaptions/help.png"];
const whisperCaptions = ["GalleryMedia/WhisperCaptions/login.png", "GalleryMedia/WhisperCaptions/home.png", "GalleryMedia/WhisperCaptions/group.png"];

var dotsIndex = 0;
var ibulk_index = 0;
var aca_nex_index = 0;
var ls_index = 0;
var whisper_index = 0;

ClickOnLink();
setInterval(SwitchDots, 500);
AnimateCaptions(ibulk_index, aca_nex_index, ls_index, whisper_index);

var interval = setInterval(() => {
    ibulk_index++;
    aca_nex_index++;
    ls_index++;
    whisper_index++;
    if (ibulk_index >= iBulkCaptions.length) {ibulk_index = 0;}
    if (aca_nex_index >= academicnexusCaptions.length) {aca_nex_index = 0;}
    if (ls_index >= logSpectrumCaptions.length) {ls_index = 0;}
    if (whisper_index >= whisperCaptions.length) {whisper_index = 0;}
    AnimateCaptions(ibulk_index, aca_nex_index, ls_index, whisper_index);
}, 5000);

function ClickOnLink() {
    for (let i = 0; i < projectLinks.length; i++) {
        visitProject[i].onclick  = function() {
            if (projectLinks[i] == "notavailable") {alert('Website is not currently available! check later.');}
            window.open(projectLinks[i], '_blank');
        }
    }
    for (let i = 0; i < latestProjectLinks.length; i++) {
        visitLatestProject[i].onclick = function() {
            if (latestProjectLinks[i] == "notavailable") {alert('Website is not currently available! check later.');}
            window.open(latestProjectLinks[i], '_blank');
        }
    }
}

function StyleDots(Thedot, opacityScale, visibilityScale) {
    Thedot.style.visibility = visibilityScale;
    Thedot.style.opacity = opacityScale;
}

function SwitchDots() {
    if (dotsIndex == 3) {for (var i = 0; i < dots.length; i++) {StyleDots(dots[i], 0, "hidden");} dotsIndex = 0;}
    else {StyleDots(dots[dotsIndex], 1, "visible"); return dotsIndex++;}
}

function AnimateCaptions(ibulk_index, aca_nex_index, ls_index, whisper_index) {
    if (iBulkCaption) {iBulkCaption.src = iBulkCaptions[ibulk_index];}
    if (academicnexusCaption)  {academicnexusCaption.src = academicnexusCaptions[aca_nex_index];}
    if (logSpectrumCaption) {logSpectrumCaption.src = logSpectrumCaptions[ls_index];}
    if (whisperCaption) {whisperCaption.src = whisperCaptions[whisper_index];}

    for (var i = 0; i < projectCaptionDiv.length; i++) {
        (function(i) {
            if (projectCaptionDiv[i]) {
                projectCaptionDiv[i].style.transition = 'none';
                projectCaptionDiv[i].style.right = '-30px';
                projectCaptionDiv[i].style.opacity = '0';
                projectCaptionDiv[i].style.visibility = 'hidden';
                void projectCaptionDiv[i].offsetWidth;

                setTimeout(() => {
                    projectCaptionDiv[i].style.transition = 'opacity 0.3s, right 0.3s';
                    projectCaptionDiv[i].style.right = '0px';
                    projectCaptionDiv[i].style.opacity = '1';
                    projectCaptionDiv[i].style.visibility = 'visible';
                }, 50);

                setTimeout(() => {
                    projectCaptionDiv[i].style.right = '30px';
                    projectCaptionDiv[i].style.opacity = '0';
                }, 4700);

                setTimeout(() => {
                    projectCaptionDiv[i].style.transition = 'none';
                    projectCaptionDiv[i].style.visibility = 'hidden';
                    projectCaptionDiv[i].style.right = '-30px';
                }, 5000);
            }
        })(i);
    }
}
