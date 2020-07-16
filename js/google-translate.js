const googleTranslateConfig = {
    lang: "ru",
    domain: "dev-prbel.ru"
};

function TranslateInit() {
    let code = TranslateGetCode();

    if (code == googleTranslateConfig.lang) {
        // Если язык по умолчанию, совпадает с языком на который переводим
        // То очищаем куки
        TranslateCookieHandler(null, googleTranslateConfig.domain);
    }

    // Инициализируем виджет с языком по умолчанию
    new google.translate.TranslateElement({
        pageLanguage: googleTranslateConfig.lang,
    });

    // Вешаем событие  клик на флаги
    $('[data-google-lang]').click(function () {
        TranslateCookieHandler("/auto/" + $(this).attr("data-google-lang"), googleTranslateConfig.domain);
        // Перезагружаем страницу
        window.location.reload();
    });
}

function TranslateGetCode() {
    // Если куки нет, то передаем дефолтный язык
    let lang = ($.cookie('googtrans') != undefined && $.cookie('googtrans') != "null") ? $.cookie('googtrans') : googleTranslateConfig.lang;
    return lang.match(/(?!^\/)[^\/]*$/gm)[0];
}

function TranslateCookieHandler(val, domain) {
    // Записываем куки /язык_который_переводим/язык_на_который_переводим
    $.cookie('googtrans', val);
    $.cookie("googtrans", val, {
        domain: "." + document.domain,
    });

    if (domain == "undefined") return;
    // записываем куки для домена, если он назначен в конфиге
    $.cookie("googtrans", val, {
        domain: domain,
    });

    $.cookie("googtrans", val, {
        domain: "." + domain,
    });
}
