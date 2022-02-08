window.addEventListener('load', main);

function main(){
    addEventListeners();
}

function addEventListeners(){

    const startMenuBtn = document.getElementById('info-btn');
    startMenuBtn?.addEventListener('click', showContent);

    
    

}




function showContent(){
   
    
    const mainPage = document.querySelector('.second-page');
    mainPage?.classList.add('second-page-animation')

    const frontPage = document.querySelector('.front-page');
    frontPage?.classList.add('menu-animation')
    console.log('gay')

} 