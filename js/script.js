
/*resposive*/

let width = window.innerWidth

let change = document.getElementById('change-6-to-12')

if (width <= 768) {
    change.classList.remove('col-6')

}
/*burger*/
let burger = document.getElementById('burger')
let navbar = document.getElementById('nav-list')
let body=document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navbar.classList.toggle('active')
    body.classList.toggle('active')
})
/*modal*/
let modal_form = document.getElementById('modal-form')

modal_form.addEventListener('change', (e) => {
    document.getElementById('submit').disabled = !e.target.checked
})