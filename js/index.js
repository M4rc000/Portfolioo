const scriptURL = 'https://script.google.com/macros/s/AKfycbzWCBVL3ClV1Yc6C1v3Mp6AOlA-j_Lrq_rEEqhpMYUA4hNrvajnCDAbKvNgyBIRgyyx/exec';
const form = document.forms['portfolio-contact-form']

const btnSend = document.querySelector('.btn-send');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');


form.addEventListener('submit', e => {
  e.preventDefault()

  btnLoading.classList.toggle('d-none');
  btnSend.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      btnLoading.classList.toggle('d-none');
      btnSend.classList.toggle('d-none');
      myAlert.classList.toggle('d-none');
      form.reset();
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})



// PARALLAX EFFECT

$(window).on('load', function(){
  setTimeout(function(){
    $('.hero .hero-left').addClass('hero-left-show');  
  },250);

  setTimeout(function(){
    $('.cover-circle').addClass('cover-circle-show');  
  },250);

});



$(window).scroll(function(){
    
  const wScroll = $(this).scrollTop();
 

// Parallax About
if(wScroll > $('.container-about').offset().top - 230 ){
  $('.isi-about',function(){
      setTimeout(function(){
          $('.isi-about-left').addClass('isi-about-left-show');  
      },120);
  });  
  $('.isi-about',function(){
      setTimeout(function(){
          $('.isi-about-right').addClass('isi-about-right-show');  
      },120);
  });  
}

if(wScroll > $('.container-about').offset().top - 60 ){
  $('.cover-certificate').each(function(i){
      setTimeout(function(){
          $('.cover-certificate').eq(i).addClass('cover-certificate-show');  
      },120 * i + 1);
  });  
}

if(wScroll > $('.container-skills').offset().top - 230 ){
  $('.cover-image').each(function(i){
      setTimeout(function(){
          $('.cover-image').eq(i).addClass('cover-image-show');  
      },120 * i+1);
  });  
}

if(wScroll > $('.container-skills').offset().top - 130 ){
  $('.cover-images').each(function(i){
      setTimeout(function(){
          $('.cover-images').eq(i).addClass('cover-images-show');  
      },120 * i+1);
  });  


}

  if(wScroll > $('.isi-skills').offset().top - 0 ){
  $('.isi-skills',function(){
      setTimeout(function(){
          $('.isi-skills-2-left').addClass('isi-skills-2-left-show');  
      },120);
  });  

  $('.isi-skills',function(){
      setTimeout(function(){
          $('.isi-skills-2-right').addClass('isi-skills-2-right-show');  
      },120);
  });  
}


});


$( '#navbar .navbar-nav a' ).on('click', 
function () {
$( '#navbar .navbar-nav' ).find( 'li.active' )
.removeClass( 'active' );
$( this ).parent( 'li' ).addClass( 'active' );
});
