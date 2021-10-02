let $css = document.querySelector('h4');
let $color1 = document.querySelector('.color1');
let $color2 = document.querySelector('.color2');
let $gradient = document.getElementById('gradient');

function setGradient() {
    $gradient.style.background =

        "linear-gradient(45deg, " +
        $color1.value +
        ", " +
        $color2.value +
        ")";

    $css.textContent = $gradient.style.background + ';';
}

$color1.addEventListener('input', setGradient);
$color2.addEventListener('input', setGradient);