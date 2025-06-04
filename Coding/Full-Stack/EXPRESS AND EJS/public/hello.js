document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('#a1'); // Select the button by its ID

    btn.addEventListener('click', () => {
        let body = document.querySelector('body');
        body.style.backgroundColor = "red"; // Change background color to red
    });
});
