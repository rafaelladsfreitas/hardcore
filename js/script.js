// alert('Olá'); testando a conexão entre HTML e JS


//var, let, const
//selecionando o item a ser manipulado (btn-menu)
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');


// console.log(btnMenu); é só pra ver pelo "inspecionar" no "console" se o botão selecionado está funcionando. 

//Associar o evento de click ao btnMenu
btnMenu.addEventListener('click', function(){
    // console.log('clicou');
    // menu.classList.add('menu-open');

    menu.classList.toggle('menu-open'); //add ou remove a classe
    btnMenu.classList.toggle('x');
})

//após o menu aberto, qualquer clique no menu, eles será fehcado
menu.addEventListener('click', function(){
    menu.classList.remove('menu-open');
    btnMenu.classList.toggle('x');
})

