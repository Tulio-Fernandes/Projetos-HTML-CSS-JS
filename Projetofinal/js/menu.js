
/*Configuração do menu*/
function Menu(config){
    this.nav = (typeof config.container === 'string') ?
    document.querySelector(config.container) : config.container /*verifica se é passado uma string se sim pega o container se nao usa o dom*/ 

    this.btn = (typeof config.togglebtn === 'string') ?
    document.querySelector(config.togglebtn) : config.togglebtn

    this.maxWidth = config.widthEnabled || false;

    this.btn.removeAttribute('style')

    var _opened = false;
    var _this = this;

    /*Função para abrir e fechar*/
    this.btn.addEventListener('click', openOrClose);

    if(this.maxWidth){
        window.addEventListener('resize', e=>{
            if(window.innerWidth > _this.maxWidth){
                _this.nav.removeAttribute('style')
                _opened = true;
            } else if(!this.nav.getAttribute('style')){
                closeMenu();
            }
        })
        if(window.innerHeight <= _this.maxWidth){
            closeMenu();
        }
    }

    function openOrClose(){
        if(!_opened){
            openMenu()
        }else{
            closeMenu()
        }
    }
    function openMenu(){
        /*Preciso recuperar a altura do menu para fazer a animação*/
        var _top = _this.nav.getBoundingClientRect().top + 'px';

        var _style = {
            maxHeight: 'calc(100vh - '+ _top +')',
            overflow: 'hidden'
        }
        applyStyleToNav(_style)

        _opened = true;
    }
    function applyStyleToNav(_style){
        Object.keys(_style).forEach( stl => { _this.nav.style[stl] = _style[stl]})
    }
    function closeMenu(){
        
        var _style = {
            maxHeight: '0px',
            overflow: 'hidden'
        }
        applyStyleToNav(_style)
        _opened = false;
    }
}