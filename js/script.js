// Last toggler
let isOpen = false;

function toEnd() {
    if (isOpen == false) {
        let interval = setInterval(() => {
            window.scroll(0, document.body.scrollHeight);
        }, 20);

        setTimeout(() => clearInterval(interval), 1000);

        isOpen = true;
    } else
        isOpen = false;
}

function moveTo(event) {
    event.preventDefault();

    let block = document.getElementById(event.currentTarget.getAttribute('href').slice(1, event.currentTarget.getAttribute('href').length));

    block.scrollIntoView({
        bock: 'start',
        behavior: 'smooth'
    })
}

// lazyload

$(function () {
    $('.lazy').lazy({
        effect: 'fadeIn',
        effectTime: 2000,
        visibleOnly: true
    });
})
