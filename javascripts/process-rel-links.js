$('a').each(function (i, e) {
    var href = e.href;
    if (href.search('.md') > 0)
        $(this).attr('href', href.split('.md')[0]);
});