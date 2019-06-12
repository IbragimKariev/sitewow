$( "#burger" ).click(function check() {
    $( this ).toggleClass( "burgeractive");
});


$('.btn-menu').on('click', function (e) {
    $('.btn-menu').toggleClass('menu-active');
    $('.nav-mini').toggleClass('menu-active');
});
