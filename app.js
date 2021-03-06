// Loader animation
const loader = document.querySelector('.loader')
window.addEventListener('load', () => {
    loader.classList.add('fading-out')
})

// Wrap every letter in a span
let textWrapper = document.querySelector('.animation')
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

anime.timeline({loop: true})
  .add({
    targets: '.animation .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  })
  .add({
    targets: '.animation .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  })

// scroll reveal
// ScrollReveal().reveal('.nav-links')
const sr = ScrollReveal({
    duration: 1000,
    reset: true,
    mobile: true
})
sr.reveal('.scrollreveal', {
	// interval: 16, ???
})
sr.reveal('.scroll1', {
    delay: 500
})
sr.reveal('.scroll2', {
    delay: 1000
}, 200) // delai en cascade en millisecondes

