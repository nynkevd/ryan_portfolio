window.onload = () => {
    console.log("JS Linked");
    const header = document.getElementById("header");
    const nav = document.getElementById("nav");
    
    nav.addEventListener('mouseleave', () => {
        if (header.classList.contains("expanded")) {
            header.classList.remove("expanded")
        }
    });

    window.addEventListener('click', e => {
        if ((e.path.reverse()[4] === undefined || !e.path.reverse()[4].matches('header')) && header.classList.contains("expanded")) {
            header.classList.remove("expanded");
        }
    });

    window.addEventListener('touchmove', e => {
        if ((e.path.reverse()[4] === undefined || !e.path.reverse()[4].matches('header')) && header.classList.contains("expanded")) {
            header.classList.remove("expanded");
        }
    });
}

function expand() {
    const header = document.getElementById("header");

    if (!header.classList.contains("expanded")) {
        header.classList.add("expanded")
    } else {
        header.classList.remove("expanded");
    }
}

function openImage(e) {
    const body = document.getElementsByTagName("BODY")[0];
    const wrapper = document.getElementById("image-popup__wrapper");
    const image = document.getElementById("image-popup__image");

    image.setAttribute('src', e.getAttribute('data-image'));

    if (!wrapper.classList.contains("hidden")) {
        wrapper.classList.add("hidden")
    } else {
        wrapper.classList.remove("hidden");
    }

    body.setAttribute('style', "overflow: hidden");

    console.log("test", e.getAttribute('data-image'));
}

function hideImage() {
    const body = document.getElementsByTagName("BODY")[0];
    const wrapper = document.getElementById("image-popup__wrapper");

    if (!wrapper.classList.contains("hidden")) {
        wrapper.classList.add("hidden")
    }

    body.removeAttribute('style');

    // console.log("test", e.getAttribute('data-image'));
}