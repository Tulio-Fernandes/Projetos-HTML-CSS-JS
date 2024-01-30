/*Função geral*/
(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js')

    var menu = new Menu({
        container: '.header__nav',
        togglebtn: '.header__btnMenu',
        widthEnabled: 1024,
    })

    var carrouseImgs = new Carousel({
        container: '.laptop-slider .slideshow',
        itens:'figure',
        btnPrev: '.prev',
        btnNext: '.next'

    })
    var carrouseImgs = new Carousel({
        container: '.quote-slideshow',
        itens:'figure',
        btnPrev: '.prev',
        btnNext: '.next'

    })
})()