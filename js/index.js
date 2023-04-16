const btnPares = document.getElementById('pares');
const btnImpares = document.getElementById('impares');
const par = document.querySelectorAll('.par');
const impar = document.querySelectorAll('.impar');


btnPares.addEventListener('click', function () {
    for (i = 0; i < par.length; i++) {
        par[i].classList.toggle('active');
        impar[i].classList.remove('active');
    }
});

btnImpares.addEventListener('click', function () {
    for (i = 0; i < par.length; i++) {
        impar[i].classList.toggle('active');
        par[i].classList.remove('active');
    }
});

