"use strict";
window.addEventListener('load', main);
function main() {
    addEventListeners();
}
function addEventListeners() {
    const startMenuBtn = document.getElementById('info-btn');
    startMenuBtn === null || startMenuBtn === void 0 ? void 0 : startMenuBtn.addEventListener('click', showContent);
}
function showContent() {
    const mainPage = document.querySelector('.second-page');
    mainPage === null || mainPage === void 0 ? void 0 : mainPage.classList.add('second-page-animation');
    const frontPage = document.querySelector('.front-page');
    frontPage === null || frontPage === void 0 ? void 0 : frontPage.classList.add('menu-animation');
    console.log('gay');
}
//# sourceMappingURL=main.js.map