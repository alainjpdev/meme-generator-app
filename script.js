<<<<<<< HEAD
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg');

let load = 0

let int = setInterval(blurring, 30)

function blurring(){
    load++
    if(load > 99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
  
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
=======
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next =  document.getElementById('next')
const circles = document.querySelectorAll('.circle')
console.log(circles)
>>>>>>> 53b3a4b95fdfd2a25f710fa354108a2f4a2d382a

let currrentActive = 1

next.addEventListener('click', () => {
    currrentActive++

    if(currrentActive> circles.length){
        currrentActive = circles.length
    }
    update()
})
prev.addEventListener('click', () => {
    currrentActive--

    if(currrentActive < 1){
        currrentActive = 1
    }
    update()
})

function update(){
    circles.forEach((circle,idx) => {
        if(idx < currrentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length -1) / (circles.length -1)) * 100 + '%'

    if(currrentActive === 1){
        prev.disabled = true

    } else if(currrentActive === circles.length){
        next.disabled= true
    } else{
        prev.disabled = false
        next.disabled =false
    }
}
  



  
