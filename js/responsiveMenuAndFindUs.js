const removePoint = () => {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#header');


    console.log(navbar);
    console.log(header);
    if (window.innerWidth >= 960) {
        navbar.classList.remove('navbar-fixed-top');
        $('#point').remove();
        console.log(`id="point" removed`)
    }
    else{
        navbar.classList.add('navbar-fixed-top');
    }
    console.log(header);
}

removePoint();

