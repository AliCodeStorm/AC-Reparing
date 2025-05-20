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

    gsap.to("#spinIcon", {
        rotation: 360,
        repeat: 1,
        duration: 1,
        ease: "linear",
        transformOrigin: "50% 50%"
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: ".service-card",
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Optional: image zoom-in animation
    gsap.from(".service-card img", {
        scrollTrigger: {
            trigger: ".service-card",
            start: "top 90%",
            toggleActions: "play none none none"
        },
        scale: 1.1,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2
    });

    gsap.to(".logo", {
        scale: 1.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
            each: 0.3,
        }
    });

    gsap.from("#servicesImage img", {
        scrollTrigger: {
            trigger: "#servicesImage",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        x: -100,
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        ease: "power2.out",
    });

    gsap.from("#servicesText", {
        scrollTrigger: {
            trigger: "#servicesText",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.3,
    });


    gsap.registerPlugin(ScrollTrigger);

    // Animate review cards
    gsap.from(".review-card", {
        scrollTrigger: {
            trigger: "#happyClients",
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
    });

    // Scroll buttons logic
    const container = document.getElementById("reviewsContainer");
    const scrollLeft = document.getElementById("scrollLeft");
    const scrollRight = document.getElementById("scrollRight");

    scrollLeft.addEventListener("click", () => {
        container.scrollBy({ left: -300, behavior: "smooth" });
    });

    scrollRight.addEventListener("click", () => {
        container.scrollBy({ left: 300, behavior: "smooth" });
    });

    gsap.from(".about-image", {
        scrollTrigger: {
            trigger: "#aboutSection",
            start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power2.out",
    });

    // Animate text content
    gsap.from(".about-content", {
        scrollTrigger: {
            trigger: "#aboutSection",
            start: "top 80%",
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power2.out",
    });

    // Animate stats one by one
    gsap.from(".stat-item", {
        scrollTrigger: {
            trigger: ".about-stats",
            start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
    });

    gsap.from(".footer-block", {
        scrollTrigger: {
            trigger: "#siteFooter",
            start: "top 85%",
        },
        opacity: 1,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

});