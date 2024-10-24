document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('startButton').addEventListener('click', function() {
    document.querySelector('#destinations').scrollIntoView({ behavior: 'smooth' });
});

const destinationFilter = document.getElementById('destinationFilter');
destinationFilter.addEventListener('change', function() {
    const selectedCategory = this.value;
    const destinations = document.querySelectorAll('.destination-item');

    destinations.forEach(destination => {
        const category = destination.getAttribute('data-category');

        if (selectedCategory === 'all' || category === selectedCategory) {
            destination.style.display = 'block';
        } else {
            destination.style.display = 'none';
        }
    });
});

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.dot');
const totalImages = images.length;

function showSlide(index) {
    images.forEach((img, i) => {
        img.style.transform = `translateX(${100 * (i - index)}%)`;
    });
    dots.forEach(dot => dot.classList.remove('active-dot'));
    dots[index].classList.add('active-dot');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showSlide(currentIndex);
}

document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        currentIndex = index;
    });
});

setInterval(nextSlide, 3000);
