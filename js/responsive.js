const removeFixed = () => {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#header');


    console.log(navbar);
    console.log(header);
    if (window.innerWidth >= 960) {
        navbar.classList.toggle('navbar-fixed-top');
        header.classList.toggle("removeStickyFromHeader");
        // $('#point').remove();
    }
    else {
        navbar.classList.add('navbar-fixed-top');
        header.classList.toggle("removeStickyFromHeader");
    }
    console.log(header);
}

removeFixed();

