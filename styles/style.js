let switchElement = document.querySelector('.switch')
let phed = document.querySelectorAll('.p-hed')
let navbar =document.querySelector('.navbar')
let navbaarbrand=document.querySelector('.navbarbrand')

let switc = document.querySelector('.switch')
let navlink = document.querySelectorAll('.navlink')

let artbat = document.querySelector('.artbat')
let psher = document.querySelector('.p-main-1')
let titleslider = document.querySelector('.title-slider-glider')
let facog=document.querySelector('.fa-cog')

let info2= document.querySelector('.info-info')

let titleinfo= document.querySelector('.titleee')

let particles= document.querySelector('#particles-js')
let pfoot= document.querySelector('.p-foot')

let inputemail = document.querySelectorAll('.input-email')
let btnfoot = document.querySelector('.btn-outline-light')
let tabtext = document.querySelectorAll('.tab-pane')
let hrpill = document.querySelector('.hr-nav-pills')

switchElement.addEventListener('click', function () {
  navbar.classList.toggle("bg-dark") 
    navlink.forEach(link=>{
     link.classList.toggle('text-white')
   })
   navbaarbrand.classList.toggle('text-white') 
   phed.forEach(p =>{
     p.classList.toggle('text-white')
   }) 
   info2.classList.toggle('text-white')
   tabtext.forEach( pill =>{
     pill.classList.toggle('text-white')
   })
    particles.classList.toggle('bg-dark')
    switc.style.border="1px solid white"
  document.body.classList.toggle('bg-dark')
  titleinfo.classList.toggle('text-white')
      facog.classList.toggle('bg-gray')
   titleslider.classList.toggle('text-white') 
   pfoot.classList.toggle('text-white')
  btnfoot.classList.toggle('btn-dark')

   
  
  
   
  
   hrpill.classList.toggle('text-white')
  
   artbat.classList.toggle('bg-black2')
   
   psher.classList.toggle('text-whitee')
   
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


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  rewind: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});



    
var app2 = document.getElementById('text-footer');

var typewriter = new Typewriter(app2, {
    loop: true
});

typewriter.typeString('تمامی حقوق این سایت متعلق به کسری مشکل گشا می باشد')
    .pauseFor(2500)
    .deleteAll()
    .start();



  
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#id_password');
  
    togglePassword.addEventListener('click', function (e) {
      // toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      // toggle the eye slash icon
      this.classList.toggle('fa-eye-slash');
  });

    
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

  const emailinput =document.querySelector('#email')
  const nameinput =document.querySelector('#id_username')
  const passwordinput =document.querySelector('#id_password')
  btnfoot.addEventListener('click' ,function (params) {
    params.preventDefault()
    


let regexname=/\w?\W?/
regexName =regexname.test(nameinput.value)

let regexemail=/\w+\-?\d?@+\w{2,5}\.\w{2,3}/
regexEmail =regexemail.test(emailinput.value)

let regextext=/\w?\W?/
regexText =regextext.test(passwordinput.value)


if (regexText && regexEmail && regexName ) {
  alert('ایمیل با موفقیت ارسال شد')
}else{
  alert('ادرس ایمیل اشتباه است')
}

   })
