const sounds = ['applause', 'boo', 'gasp', 'tada',
    'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    document.getElementById('buttons').append(btn)
    btn.innerText = sound
    btn.classList.add('btn')

    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })

})

