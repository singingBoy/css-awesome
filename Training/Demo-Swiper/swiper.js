window.onload = function () {
  const swiper = document.getElementById('swiper');
  const width = swiper.clientWidth;
  let lastX = null;

  registEvent(swiper);
  initSwiperItemWidth(swiper);
  // move事件
  function handleMove(e) {
    console.log(e)
    const moveX = lastX ? e.screenX - lastX : 0;
    swiper.style.transform = `translateX(${moveX}px)`;
    lastX = e.screenX;
  }
  // 注册mouseDown事件
  function registEvent(swiper) {
    swiper.addEventListener('mousedown', () => {
      console.log('mousedown')
      swiper.addEventListener('mousemove', handleMove, false)
    });
    swiper.addEventListener('mouseup', () => {
      console.log('mouseup')
      swiper.removeEventListener('mousemove', handleMove, false);
    });
    swiper.addEventListener('mouseleave', () => {
      swiper.removeEventListener('mousemove', handleMove, false);
    })
    swiper.addEventListener('mousemove', () => {
      console.log('mousemove')
    })
  }
  // 初始子项宽度
  function initSwiperItemWidth(swiper) {
    const swiperItems = swiper.children;
    Array.from(swiperItems).map(item => {
      item.style.width = width + 'px';
    });
    swiper.style.width = Array.from(swiperItems).length * width + 'px';
  }
};