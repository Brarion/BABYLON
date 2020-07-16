$('.card').each(function () {

    $(this).children('img').attr('alt', $(this).find('h1').text());
})

let info;
$('body').mousemove(function (e) {
    if (info !== e.target) {

        if ($(e.target).find('h1').length > 0) {

            document.title = $(e.target).find('h1').text();
        }
        info = e.target;
    }
});
