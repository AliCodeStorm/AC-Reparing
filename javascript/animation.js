window.addEventListener('DOMContentLoaded', () => {

    gsap.fromTo("#contact-bar",
        { y: -100, opacity: 0, scale: 0.95, display: 'none' },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out", display: 'flex', delay: 0.2 }
    );

    gsap.from(["#contact-phone", "#contact-email", "#contact-hours"], {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.3,
        ease: "power2.out",
        delay: 1,
    });

    gsap.to("#contact-call-btn", {
        scale: 1.1,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    gsap.from("#mainNavbar", {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
            gsap.from("#mainNavbar a", {
                opacity: 0,
                y: -10,
                duration: 0.6,
                stagger: 0.1,
                ease: "power1.out"
            });
        }
    });

    gsap.from("#navbar-logo", {
        x: -100,
        opacity: 0,
        duration: 3,
        ease: "power3.out"
    });

      gsap.to("#logo-img", {
    rotate: 360,
    duration: 1,
    repeat: -1,
    ease: "power1.inOut",
    repeatDelay: 4 // 1s animation + 4s delay = every 5s
  });

});