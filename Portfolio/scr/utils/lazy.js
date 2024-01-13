const lazyImgs = document.querySelectorAll('.lazy');

const observer = new IntersectionObserver(entries => {
    console.log(entries);
});

lazyImgs.forEach(img => {
    observer.observe(img);
});