gsap.from(".letter", { 
    y: -500, 
    duration: 2, 
    ease: "bounce.out",
    stagger: 0.1
})

gsap.to(".letter", { 
    scaleY: 0.6, 
    // scaleX: 1.4,
    duration: 0.1, 
    delay: 2
})

gsap.to(".letter", { 
    scaleY: 1, 
    // scaleX: 1,
    duration: 0.1, 
    delay: 2.1
})

