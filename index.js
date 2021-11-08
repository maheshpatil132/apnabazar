let btn = document.getElementById('menu_btn')
let search = document.getElementById('search')
let navbar = document.getElementsByClassName('navbar')[0]
let form = document.getElementsByClassName('search_form')[0]
let slide = document.getElementsByClassName('slide')
let slides = Array.from(document.getElementsByClassName('slide'))
let bracket = document.getElementById('bracket')
let bracket_2 = document.getElementById('bracket_2')
let sub = document.getElementsByClassName('sub_link')[0]
let sub_2 = document.getElementsByClassName('sub_link')[1]

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
   
 
},2500)
bracket.addEventListener('click',function(){
  bracket.classList.toggle("fa-chevron-up")
  if(bracket.classList.contains('fa-chevron-up')){
     sub.style.display ="block"
  }
  else{
    sub.style.display ="none"
  }

})
bracket_2.addEventListener('click',function(){
  bracket_2.classList.toggle("fa-chevron-up")
  if(bracket_2.classList.contains('fa-chevron-up')){
     sub_2.style.display ="block"
  }
  else{
    sub_2.style.display ="none"
  }

})
