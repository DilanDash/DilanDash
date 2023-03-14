const usarname = document.getElementsById(`Dilan`)
const password = document.getElementsById(`zarate`)
const button = document.getElementsById(`button`)

button.addEventListener(`click`,() =>{
    e.preventDefault()
    const data = {
        usarname: usarname.value,
        password: password.value
    }
    console.log()
})