// scrollToTop

let myBtn = document.getElementById('toTop');
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
        myBtn.style.display = 'block';
    else
        myBtn.style.display = 'none';
}

function toTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000, null);
}

