$(function () {
    $('a').each(function (i) {
        var href = this.attr('href');
        if (href.search('.md') > 0)
            this.attr('href', href.split('.md')[0]);
    });
});