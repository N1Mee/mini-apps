// 1).


let b1 = document.getElementById("first")
let b2 = document.getElementById("second")
let b3 = document.getElementById("third")
let b1c = document.getElementById("first-c")
let b2c = document.getElementById("second-c")
let b3c = document.getElementById("third-c")

let buttons = [b1, b2, b3]
let content = [b1c, b2c, b3c]

b1.addEventListener('click', (event) => {
    event.preventDefault();
    openTab(b1, b1c)
})

b2.addEventListener('click', (event) => {
    event.preventDefault();
    openTab(b2, b2c)
})

b3.addEventListener('click', (event) => {
    event.preventDefault();
    openTab(b3, b3c)
})

function openTab(event, id) {
    buttons.forEach(element => {
        element.classList.remove('active')
    });
    content.forEach(element => {
        element.classList.remove('active')
    })
    event.classList.add('active')
    id.classList.add('active')
}


// 2).


let sw = document.querySelector('button.switch')

sw.addEventListener('click', (event) => {
    let white = document.querySelector('button.white')

    if (white === null) {
        buttons.forEach(element => {
            element.classList.add('dark')
        })
        content.forEach(element => {
            element.classList.add('dark')
        })
        let nav = document.querySelector('nav.tabs')
        nav.classList.add('dark')
        let body = document.querySelector('body')
        body.classList.add('dark')
        sw.classList.add('white')
        sw.innerText = 'Включить белую тему'
    } else {
        buttons.forEach(element => {
            element.classList.remove('dark')
        })
        content.forEach(element => {
            element.classList.remove('dark')
        })
        let nav = document.querySelector('nav.tabs')
        let body = document.querySelector('body')
        nav.classList.remove('dark')
        body.classList.remove('dark')
        sw.classList.remove('white')
        sw.innerText = 'Включить темную тему'
    }
})

// 3).

let time = document.querySelector('div.time')

let d

setInterval(() => {
    d = new Date()
    time.innerText = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
}, 1000);