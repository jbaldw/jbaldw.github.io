// When card with front or back class is clicked it sets or unsets the active class

document.querySelector('.front').addEventListener('click', function () {
    document.querySelector('.flip-card-style').classList.toggle('active');
    document.querySelector('.spongebob').play();
});

// Autoplay audio on page load
document.querySelector('.audio').attributes.removeNamedItem('muted');
document.querySelector('.audio').play();
