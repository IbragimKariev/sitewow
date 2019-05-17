//
// $('.nav-li').on('click', function (e) {
//     $('.category-items').toggleClass('menu-active');
// });
// $('.nav-li a').on('click', function (e) {
//     $('.nav-li').removeClass('menu-active');
// });



document.body.onclick = function (event) {
    event = event || window.event;
    let allDiv = document.querySelectorAll('.image');
    console.log(allDiv);
    for (let i=0; i< allDiv.length; i++){
        allDiv[i].classList.remove('active');
    }

    if (event.target.classList.contains('image')){
        document.getElementById('max').src = event.target.src;


        event.target.classList.add('active');
    }

}


