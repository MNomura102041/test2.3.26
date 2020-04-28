'use strict';

$(document).ready(function() {
    $('.open_nav').on('click', function() {
        $('.wrapper, .aside').toggleClass('show');
    });
});

console.log("OK");
