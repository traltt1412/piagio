import BaseModule from "./BaseModule"
import Swiper from "swiper/swiper-bundle"
import "swiper/swiper-bundle.css"

export default class Slider extends BaseModule {
  constructor(el, factory) {
    super(el, factory, 'Slider')
    this.el = el
    this.swiperContainer = this.el.querySelector(".swiper-container")
    this.swiperNext = this.el.querySelector(".swiper-button-next") || null
    this.swiperPrev = this.el.querySelector(".swiper-button-prev") || null
    this.register()
  }

  config() {
    return {
      slidesPerView: "auto",
      watchOverflow: true,
      observer : true,
      observeParents: true,
      loop: true,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: this.swiperNext,
        prevEl: this.swiperPrev,
      }
    }
  }

  register() {
    new Swiper(this.swiperContainer, this.config())
  }
}
