document.addEventListener('DOMContentLoaded', function() {

    let ab = start('https://testevelcodes1.firebaseio.com/')

    let element = document.querySelector('.teste_velocidade')

    element.addEventListener('click', function() {
        ab.finish()
    })

    let as = document.querySelectorAll('a')

    for(let a of as) {
        a.addEventListener('click', function(event) {
            event.preventDefault()
            setTimeout(function() {
                window.location.assign(a.href)
            }, 3000)
        })
    }
})
