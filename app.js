// THIS IS JUST AN EXAMPLE ON HOW WORK WITH SCROLL TRIGGER

// const tlIntro = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.first-page',
//         start: '0%',
//         end: '100%',
//     },
// })

// tlIntro.fromTo('nav', {opacity: 1}, {opacity: 0, duration: 1})

// Pin the Page 1
const tlIntro = gsap.timeline({
    scrollTrigger: {
        trigger: '.first-page',
        start: '0%',
        end: '100%',
        pin: true,
        pinSpacing: false,
    }
})

// Highlight Page 2
const tlH = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        scrub: true,
        start: "-30%",
        end: "40%",
    },
})

tlH.fromTo('.highlight', {color: 'rgba(255,255,255, 0.3)'}, {color: 'rgba(255,255,255, 1)', stagger: 1})

const tlRemove = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        scrub: true,
        start: "-20%",
        end: "60%",
    },
})

tlRemove.to('.highlight', {color: 'rgba(255,255,255, 0.3)', stagger: 1})

// Split Phone Page 3
const tlSplit = gsap.timeline({
    scrollTrigger: {
        trigger: '.third-page',
        start: '-35%',
        end: '30%',
        scrub: true,
    }
})

tlSplit.fromTo('.large-phone', {x: '40%'}, {x: '20%'})
tlSplit.fromTo('.small-phone', {x: '-40%'}, {x: '-20%'}, '<')
tlSplit.fromTo('.product-text-left', {x: 50, opacity: 0}, {opacity: 1, x: 0}, '<')
tlSplit.fromTo('.product-text-right', {x: -50, opacity: 0}, {opacity: 1, x: 0}, '<')

const tlSplitPin = gsap.timeline({
    scrollTrigger: {
        trigger: '.third-page',
        pin: true,
        pinSpacing: false,
        start: '0%',
        end: '100%',
    }
})

// Carousel Part
const swatches = document.querySelectorAll('.swatches img')
const gallery = document.querySelector('.phone-gallery')
const slides = document.querySelectorAll('.phone-gallery-container')

let currentSwatch = 'blue'
let topIndex = 2

swatches.forEach((swatch, index) => {
    const coord = slides[index].getBoundingClientRect().left

    swatch.addEventListener('click', (e) => {
        let swatchName = e.target.getAttribute('swatch')
        let closeUp = document.querySelector('.' + swatchName)

        // Check if we're on the same swatch
        if(currentSwatch === swatchName) return

        gsap.set(closeUp, {zIndex: topIndex})
        gsap.fromTo(closeUp, {opacity: 0}, {opacity: 1, duration: 1})
        
        // Changing the gallery
        gsap.to(gallery, {x: -coord, duration: 1, ease: "power2.out"})

        //Increment Z-Index
        topIndex++
        currentSwatch = swatchName 
    })
})

// Page 5
const tlVideo = gsap.timeline({
    scrollTrigger: {
        trigger: '.fifth-page',
        start: '0%',
        end: '180%',
        scrub: true,
        pin: true,
    }
})

tlVideo.fromTo('.product-video', {currentTime: 0}, {currentTime: 3, duration: 1})
tlVideo.fromTo('.product-info-container h3', {opacity: 0}, {opacity: 1, stagger: 0.25, duration: 0.5}, '<')

// Sixth Page
const tlParallax = gsap.timeline({
    scrollTrigger: {
        trigger: '.sixth-page',
        start: '-25%',
        end: '50%',
        scrub: true,      
    }
})

tlParallax.fromTo('.photo-description', {y: 0}, {y: -80})
tlParallax.fromTo('.portrait-container', {y: 0}, {y: -80}, '<')
tlH.tlParallax.fromTo('.phone-video', {y: 0}, {y: -200}, '<')