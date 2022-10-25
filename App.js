const codes = document.querySelectorAll('.input')

codes[0].focus()

codes.forEach((input, idx) =>{
    input.addEventListener('keydown' , (e) =>{
        if(e.key >= 0 && e.key <= 9){
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)
        }else if(e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})
