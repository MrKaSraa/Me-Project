let switchElement = document.querySelector('.switch')
let phed = document.querySelectorAll('.p-hed')
let navbar =document.querySelector('.navbar')
let navbaarbrand=document.querySelector('.navbarbrand')

let switc = document.querySelector('.switch')
let navlink = document.querySelectorAll('.navlink')

let artbat = document.querySelector('.artbat')
let psher = document.querySelector('.p-main-1')
let titleslider = document.querySelector('.title-slider-glider')


let info2= document.querySelector('.info-info')

let titleinfo= document.querySelector('.titleee')

let particles= document.querySelector('#particles-js')
let pfoot= document.querySelector('.p-foot')
let smilewink= document.querySelector('.fa-smile-wink')
let inputemail = document.querySelectorAll('.input-email')
let btnfoot = document.querySelector('#btn-foot')
let tabpane = document.querySelectorAll('.tab-pane')


switchElement.addEventListener('click', function () {
  document.body.classList.toggle('bg-dark')
  pfoot.classList.toggle('text-white')
  navbaarbrand.classList.toggle('text-white')
  particles.classList.toggle('bg-dark')
  smilewink.classList.toggle('text-dark')
  info2.classList.toggle('text-white')
  switc.style.border="1px solid white"
  titleinfo.classList.toggle('text-white')
  btnfoot.classList.toggle('btn-dark')
  
  titleslider.classList.toggle('text-white')
  tabpane.forEach(tab=>{
    tab.classList.toggle('text-white')
  })
  phed.forEach(p =>{
    p.classList.toggle('text-white')
  })
  inputemail.forEach(input=>{
    input.classList.toggle('bg-dark')
    input.classList.toggle('text-white')
  })
  navlink.forEach(link=>{
    link.classList.toggle('text-white')
  })
  artbat.classList.toggle('bg-black2')
  navbar.classList.toggle("bg-dark")
  psher.classList.toggle('text-white')
  

 

  

  })

 


  document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 20) {
      console.log('hi');
     
    navbar.style.height="5rem"
    navbar.classList.toggle('border-bottom')
    }else{
   
     navbar.style.height="6.5rem"
     navbar.classList.toggle('border-0')
    }
})

new Glider(document.querySelector('.glider2'), {
  slidesToShow: 4,
  slidesToScroll:3,
  draggable: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});


    
var app2 = document.getElementById('text-footer');

var typewriter = new Typewriter(app2, {
    loop: true
});

typewriter.typeString('تمامی حقوق این سایت متعلق به کسری مشکل گشا می باشد')
    .pauseFor(2500)
    .deleteAll()
    .start();



  
  

    
    var toast = document.querySelector('#iziToast'); // Selector of your toast
 
    iziToast.show({
      theme: 'dark',
      icon: ' fa fa-smile-wink',
  
      message: `<a style="color: #5999d8; font-family:vazir; text-decoration: none;" href="github.com">!یه سر به گیتهاب من بزن</a>`,
   
      position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
      progressBarColor: 'rgb(0, 255, 184)',
   
      onOpening: function(instance, toast){
          console.info('callback abriu!');
      },
      onClosing: function(instance, toast, closedBy){
          console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
      }
  });

  const emailinput =document.querySelector('#emailinput')
  const nameinput =document.querySelector('#nameinput')
  const textinput =document.querySelector('#textinput')
  btnfoot.addEventListener('click' ,function (params) {
    params.preventDefault()
    


let regexname=/\w+\-?\.?\w/
regexName =regexname.test(nameinput.value)
let regexEmail=/\w+\-?\d?@+\w{2,5}\.\w{2,3}/
regexEmail =regexEmail.test(emailinput.value)

let regextext=/\w+\.?\-?\s?/
regexText =regextext.test(textinput.value)
// if (regexText) {
//   alert('ایمیل با موفقیت ارسال شد')
// }else{
//   alert('ادرس ایمیل اشتباه است')
// }

// if (regexname) {
//   alert('ایمیل با موفقیت ارسال شد')
// }else{
//   alert('ادرس ایمیل اشتباه است')
// }

// if (regexText) {
//   alert('ایمیل با موفقیت ارسال شد')
// }else{
//   alert('ادرس ایمیل اشتباه است')
// }

if (regexText && regexEmail && regexName ) {
  alert('ایمیل با موفقیت ارسال شد')
}else{
  alert('ادرس ایمیل اشتباه است')
}

   })