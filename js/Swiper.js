
var mySwiper = new Swiper('.swiper-container', {
	//autoplay: true,//可选选项，自动滑动
	autoplay: {
	    delay: 3000,
	    stopOnLastSlide: false,
	    disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
        bulletElement : 'li',
  }
})
