var btn = document.getElementById('btn');
var container = document.querySelector('.bg-season1');

btn.addEventListener('click', function() {

    var transition, t;
    clearInterval(transition);

    if (container.style.display == 'none') {
        container.style.opacity = "0";
        container.style.display = "block";
        var x = .1;
    } else {
        var x = .9;
        t = true;

    }

    transition = setInterval(function() {
        container.style.opacity = x;
        x += t ? -.1 : .1;
        if ((x >= 1 && !t) || (x <= 0 && t)) {
            clearInterval(transition);
            if (x <= 0) container.style.display = 'none';
        }
    }, 50);


});