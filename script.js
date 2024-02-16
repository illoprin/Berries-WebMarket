const header = document.querySelector('header')
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})

let sections = document.querySelectorAll('section');

document.addEventListener("scroll", () => {
    // Writing scrollY value to css text
    document.body.style.setProperty('--scrollTop', `${this.scrollY}px`)
    // Enabling class "scrolled" for header on scroll
    header.classList.toggle("scrolled", window.scrollY > 0);
    
    // Toggle class 'show_animation' to separate section when scrolled to it
    for (section of sections) {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;

        if (top >= offset && top <= offset + height) 
            section.classList.add ('show_animation')
        else 
            section.classList.remove ('show_animation')
    }
});