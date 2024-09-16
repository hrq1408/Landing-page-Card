document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');

    if (!localStorage.getItem('popupDisplayed')) {
        window.addEventListener('mouseout', function (event) {
            if (event.clientY < 0) {
                popup.style.display = 'flex';
                localStorage.setItem('popupDisplayed', 'true');
            }
        });
    }

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    const form = document.getElementById('signup-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Cadastro realizado com sucesso!');
        popup.style.display = 'none';
    });
});
