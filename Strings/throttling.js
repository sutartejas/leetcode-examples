function throttle(func, limit) {
    let isThrottle;

    return function (...args) {
        if (!isThrottle) {
            func.apply(this, args);
            isThrottle = true;
            setTimeout(() => {
                isThrottle = false
            }, limit);
        }
    };
}

const handleScroll = throttle(() => {
    console.log('Scrolled');
}, 1000);

window.addEventListener('scroll', handleScroll);
