const openFormules = () => {
    const formules = document.querySelector('#formules');
    const formulesContent = document.querySelector('.formules-content');
    console.log(formules);
    console.log(formulesContent);

    formules.addEventListener('click', () => {
        formulesContent.classList.toggle('closed');
    });
}


const openBubbleTea = () => {
    const bubbleTea = document.querySelector('#bubbleTea');
    const bubbleTeaContent = document.querySelector('.bubbleTea-content');
    console.log(bubbleTea);
    console.log(bubbleTeaContent);

    bubbleTea.addEventListener('click', () => {
        bubbleTeaContent.classList.toggle('closed');
    });
}

openFormules();
openBubbleTea();


