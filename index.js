let btn = document.getElementById('menu_btn')
let search = document.getElementById('search')
let navbar = document.getElementsByClassName('navbar')[0]
let form = document.getElementsByClassName('search_form')[0]
let slide = document.getElementsByClassName('slide')
let slides = Array.from(document.getElementsByClassName('slide'))
let index=0;
btn.addEventListener('click', function(){
  navbar.classList.toggle('active')
})

search.addEventListener('click', function(){
  form.classList.toggle('active')
})

setInterval(function(){ 
  slide[index].classList.remove('active')
   index++
   if(index<slides.length){
    slide[index].classList.add('active')
   }
   else{
     index=0;
     slide[index].classList.add('active')
   }
   
 
},2000)
