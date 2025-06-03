// 光标跟随效果
document.addEventListener('DOMContentLoaded', () => {
    const cursorLight = document.querySelector('.cursor-light');
    
    document.addEventListener('mousemove', (e) => {
        cursorLight.style.left = e.clientX + 'px';
        cursorLight.style.top = e.clientY + 'px';
    });
    
    // 滚动动画
    const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
    
    const checkScroll = () => {
        scrollAnimateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                element.classList.add('visible');
            }
        });
    };
    
    // 初始检查
    checkScroll();
    
    // 滚动时检查
    window.addEventListener('scroll', checkScroll);
});