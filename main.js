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