var btn = document.getElementById('btn');
var container = document.querySelector('.bg-season1');

btn.addEventListener('click', function() {

    if (container.style.display === 'none') {} else {
        container.style.display = 'block';
    }
    $('html, body').animate({
        scrollTop: targetOffset - 100
    }, 500);
});

function onOver(section) {
    elemento.style.backgroundColor = 'red';
}