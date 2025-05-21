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

    // gsap.from("#navbar-logo", {
    //     x: -100,
    //     opacity: 0,
    //     duration: 3,
    //     ease: "power3.out"
    // });

    gsap.to("#spin-img", {
        rotate: 360,
        duration: 1,
        repeat: -1,
        ease: "power1.inOut",
        repeatDelay: 3
    });

    gsap.to("#spinIcon", {
        rotation: 360,
        repeat: 0,
        duration: 1,
        ease: "linear",
        transformOrigin: "50% 50%"
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: "#triggerAnimation",
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

    // scrollLeft.addEventListener("click", () => {
    //     container.scrollBy({ left: -300, behavior: "smooth" });
    // });

    // scrollRight.addEventListener("click", () => {
    //     container.scrollBy({ left: 300, behavior: "smooth" });
    // });

    // gsap.from(".about-image", {
    //     scrollTrigger: {
    //         trigger: "#aboutSection",
    //         start: "top 80%",
    //     },
    //     opacity: 0,
    //     scale: 0.95,
    //     duration: 1,
    //     ease: "power2.out",
    // });

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


    gsap.from("#hero > h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#hero > h1",
            start: "top 80%",
        },
    });

    gsap.from("#hero > p", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#hero > p",
            start: "top 80%",
        },
    });

    gsap.from("#hero > a", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#hero > a",
            start: "top 80%",
        },
    });

    // Services grid cards
    gsap.from("#services-grid > div", {
        scrollTrigger: {
            trigger: "#services-grid",
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
    });

    // Gallery images
    gsap.from("#gallery img", {
        scrollTrigger: {
            trigger: "#gallery",
            start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
    });

    // Why choose us items
    gsap.from("#why-choose .grid.text-gray-700 > div", {
        scrollTrigger: {
            trigger: "#why-choose",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
    });

    // Contact section
    gsap.from("#contact h2", {
        scrollTrigger: {
            trigger: "#contact h2",
            start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    });

    gsap.from("#contact p", {
        scrollTrigger: {
            trigger: "#contact p",
            start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
    });

    gsap.from("#contact a", {
        scrollTrigger: {
            trigger: "#contact a",
            start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
    });


    gsap.from("#aircon-heading", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#aircon-section",
            start: "top 80%",
        },
    });

    gsap.from("#aircon-text", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#aircon-section",
            start: "top 80%",
        },
    });

    gsap.from(["#call-button", "#whatsapp-button"], {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
            trigger: "#aircon-section",
            start: "top 80%",
        },
    });

    gsap.from(["#about-subtitle", "#about-title", "#about-description"], {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
            trigger: "#about-section",
            start: "top 80%",
        },
    });

    // Animate teamwork text
    gsap.from(
        [
            "#teamwork-title",
            "#teamwork-para1",
            "#teamwork-para2"
        ],
        {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
            stagger: 0.3,
            scrollTrigger: {
                trigger: "#teamwork-text",
                start: "top 85%",
            },
        }
    );

    // Animate teamwork images with stagger
    gsap.from(["#teamwork-img1", "#teamwork-img2"], {
        scale: 0.85,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#teamwork-images",
            start: "top 85%",
        },
    });

    // Animate stats heading and divider
    gsap.from(["#stats-subtitle", "#stats-section hr"], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#stats-section",
            start: "top 90%",
        },
    });

    // Animate each stat block
    gsap.from(
        [
            "#stat-revenue",
            "#stat-clients",
            "#stat-repairs",
            "#stat-reviews"
        ],
        {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "power3.out",
            stagger: 0.25,
            scrollTrigger: {
                trigger: "#stats-section",
                start: "top 90%",
            },
        }
    );

    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.6 } });

    // Animate Why Choose Us section
    tl.from("#whyChooseUsTitle", { y: 40, opacity: 0 });
    tl.from("#whyChooseUsGrid > div", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
    }, "-=0.3");

    // Animate Call to Action section
    tl.from("#callToActionTitle", { y: 40, opacity: 0, delay: 0.3 });
    tl.from("#callToActionText", { y: 40, opacity: 0 }, "-=0.3");
    // tl.from("#callToActionButton", { y: 40, opacity: 0 }, "-=0.3");

    const missionTl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'power3.out' }
    });

    missionTl.from('#missionImageBlock', { y: 60, opacity: 0 });
    missionTl.from('#missionQuote', { y: 30, opacity: 0 }, '-=0.4');
    missionTl.from('#missionCommitment', { y: 40, opacity: 0 }, '-=0.5');
    missionTl.from('#missionTitle', { y: 40, opacity: 0 }, '-=0.4');
    missionTl.from('#missionParagraphs p', { y: 30, opacity: 0, stagger: 0.25 }, '-=0.5');
    missionTl.from('#missionStats > div', { y: 30, opacity: 0, stagger: 0.2 }, '-=0.6');
    missionTl.from('#missionLearnMoreBtn', { y: 30, opacity: 0 }, '-=0.4');

     gsap.from("#contact-heading", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from("#contact-form", {
      opacity: 0,
      x: -100,
      duration: 1.2,
      delay: 0.3,
      ease: "power2.out"
    });

    gsap.from("#map-section", {
      opacity: 0,
      x: 100,
      duration: 1.2,
      delay: 0.4,
      ease: "power2.out"
    });

    gsap.from("#contact-info", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.6,
      ease: "power2.out"
    });

    gsap.from("#faq-section", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.8,
      ease: "power2.out"
    });
});