$(document).ready(function () {
    var searchButton = $('.glass-filters button');
    var stringTerm = $('#nameTerm');
    var priceTermMin = $('#priceTermMin');
    var priceTermMax = $('#priceTermMax');
    searchButton.bind('click', function (e) {
        var apiPath = '';
        var params = {}
        if(stringTerm.val()) {
            apiPath += '&search=' + stringTerm.val();
        }
        if(priceTermMin.val()) {
            apiPath += '&price_min=' + priceTermMin.val();
        }
        if(priceTermMax.val()) {
            apiPath += '&price_max=' + priceTermMax.val();
        }
        if(apiPath !== '/?') {
            window.location.search = apiPath;
        }
    });
});