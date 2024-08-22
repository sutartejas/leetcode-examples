function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

const handleResize = debounce(() => {
    console.log('Resized');
}, 300);

window.addEventListener('resize', handleResize);
