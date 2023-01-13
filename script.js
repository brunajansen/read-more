//variaveis que recebem o id do elemento
var button = document.getElementById('read_button');

//eventos
button.addEventListener('click', readmore);

//funcoes
function readmore(){
    var card = document.querySelector('.card');
    card.classList.toggle('active');

    if(card.classList.contains('active')){
        return button.textContent = 'Read less';
    }

    return button.textContent = 'Read more';
}