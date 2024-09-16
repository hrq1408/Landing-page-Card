const nomeEstabelecimentoInput = document.getElementById('nomeEstabelecimento');
const emailInput = document.getElementById('email');



const beneficiosList = document.querySelector('.beneficios ul');

const novosBeneficios = ['Aceitação de todos os cartões', 'Suporte 24h'];

novosBeneficios.forEach(beneficio => {
    const listItem = document.createElement('li');
    listItem.textContent = beneficio;
    beneficiosList.appendChild(listItem);
});