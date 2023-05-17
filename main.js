const swiperTop = new Swiper(".swiper-container-top", {
  loop: true, // ループ有効
  slidesPerView: 7, // 一度に表示する枚数を7に変更
  speed: 6000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
    reverseDirection: false, // 逆方向有効化
  },
  slidesOffsetAfter: 24, // スライド群の右端をずらす
});

const swiperBottom = new Swiper(".swiper-container-bottom", {
  loop: true,
  slidesPerView: 7,
  speed: 6000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    reverseDirection: true,
  },
  slidesOffsetAfter: 24,
});

// const swiperBottom = new Swiper(".swiper-container-bottom", {
//   loop: true,
//   slidesPerView: 7,
//   speed: 6000,
//   allowTouchMove: false,
//   autoplay: false, // 一時的に自動再生を無効化

//   slidesOffsetAfter: 24,
// });

// // 少し遅延させてから自動再生を開始
// setTimeout(() => {
//   swiperBottom.params.autoplay = {
//     delay: 0,
//     reverseDirection: true,
//   };
//   swiperBottom.autoplay.start();
// }, 100); // 100ミリ秒後に自動再生を開始
