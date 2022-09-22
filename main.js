let color = [
    'red',
    'yellow',
    'blue',
    'purple',
    'pink',
    'black',
    'orange'
]
let back = document.getElementById('back')
let red = 0;
let clic = document.getElementById('btn')

clic.addEventListener('click', () => {
    // get random numbers btw 0 - 6
    let randomNumber = Math.floor(Math.random() * 6)
    back.textContent = color[randomNumber]
    console.log(randomNumber);
    if (color[randomNumber] == 'red') {
        document.body.style.backgroundColor = 'red'
        back.style.color = 'black'
    }else if (color[randomNumber] == 'yellow'){
        document.body.style.backgroundColor = 'yellow'
        back.style.color = 'black'
    }else if (color[randomNumber] == 'blue'){
        document.body.style.backgroundColor = 'blue'
        back.style.color = 'white'
    }else if (color[randomNumber] == 'purple'){
        document.body.style.backgroundColor = 'purple'
        back.style.color = 'white'
    }else if (color[randomNumber] == 'pink'){
        document.body.style.backgroundColor = 'pink'
        back.style.color = 'white'
    }else if (color[randomNumber] == 'black'){
        document.body.style.backgroundColor = 'black'
        back.style.color = 'white'
    }else if (color[randomNumber] == 'orange'){
        document.body.style.backgroundColor = 'orange'
        back.style.color = 'black'
    }else{
        document.body.style.backgroundColor = 'white'
    }
})


