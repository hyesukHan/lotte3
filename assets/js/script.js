//sc-estimate tab menu

$('.sc-estimate .content-wrap .tab-item').click(function(e){
  e.preventDefault();
  $(this).addClass('on').siblings().removeClass('on');
  num = $(this).data('brand');
  list(num);

  tabName = $(this).data('tab');
  $('#'+tabName).addClass('on').siblings().removeClass('on');
})

list(0);

//data를 받아오는 함수

function list(num){
  fetch('https://raw.githubusercontent.com/hyesukHan/lotte3/main/assets/data/car.json')
  .then(res => res.json())
  .then(json => {

    listArr = [json.hyundaiList,json.kiaList,json.renaultList,json.chevroletList,json.kgList]

    data = listArr[num];
    let html = ``;
    data.forEach(element => {
        html += ` <div class="swiper-slide">
                  <img src="${element.thumbnail}" alt class="car">
                  <p class="name">${element.name}</p>
                  </div>`
    });

    $('#carList').html(html);

    
  let swiper = new Swiper('.sc-estimate .swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
  });
  
})
}

let swiper1 = new Swiper(".sc-banner .swiper", {
    
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    slidesPerView: 1.05,  
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      },
  });


//menu버튼 

$('.header-top .menu-wrap .btn-menu').click(function(e){
  $('.header-top .menu-wrap .menu-area').addClass('on');
  $('body').addClass('on');
})
$('.header-top .menu-wrap .menu-area .btn-close').click(function(e){
  $('.header-top .menu-wrap .menu-area').removeClass('on');
  $('body').removeClass('on');
})

fixEl = document.querySelector('.btn-top');
fixEl.addEventListener('click',()=>{
  window.scrollTo({top:0,behavior:"smooth"})
})

//footer 아코디언 

$('.footer .btn-toggle').click(function(e){
    $(this).toggleClass('on');
    $('.footer .company .info-wrap').slideToggle();
})
