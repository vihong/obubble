const openFormules = () => {
    const formules = document.querySelector('#formules');
    const formulesContent = document.querySelector('.formules-content');
    // console.log(formules);
    // console.log(formulesContent);

    formules.addEventListener('click', () => {
        formulesContent.classList.toggle('closed');
    });
}


const openBubbleTea = () => {
    const bubbleTea = document.querySelector('#bubbleTea');
    const bubbleTeaContent = document.querySelector('.bubbleTea-content');

    bubbleTea.addEventListener('click', () => {
        bubbleTeaContent.classList.toggle('closed');
    });
}

const openSmoothies = () => {
    const smoothies = document.querySelector('#smoothies');
    const smoothiesContent = document.querySelector('.smoothies-content');

    smoothies.addEventListener('click', () => {
        smoothiesContent.classList.toggle('closed');
    });
}

const openChauds = () => {
    const chauds = document.querySelector('#chauds');
    const chaudsContent = document.querySelector('.chauds-content');
    console.log(chauds);
    console.log(chaudsContent);

    chauds.addEventListener('click', () => {
        chaudsContent.classList.toggle('closed');
    });
}

const openManger = () => {
    const manger = document.querySelector('#manger');
    const mangerContent = document.querySelector('.manger-content');
    console.log(manger);
    console.log(mangerContent);

    manger.addEventListener('click', () => {
        mangerContent.classList.toggle('closed');
    });
}


openFormules();
openBubbleTea();
openSmoothies();
openChauds();
openManger();
