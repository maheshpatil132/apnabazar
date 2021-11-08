let btn = document.getElementById('menu_btn')
let search = document.getElementById('search')
let navbar = document.getElementsByClassName('navbar')[0]
let form = document.getElementsByClassName('search_form')[0]
btn.addEventListener('click', function(){
  navbar.classList.toggle('active')
})
search.addEventListener('click', function(){
  form.classList.toggle('active')
})