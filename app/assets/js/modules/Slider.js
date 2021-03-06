import BaseModule from "./BaseModule"
import Swiper from "swiper/swiper-bundle"
import "swiper/swiper-bundle.css"
import Banner from "./Banner"

export default class Slider extends BaseModule {
  constructor(el, factory) {
    super(el, factory, 'Slider')
    this.el = el
    this.swiperContainer = this.el.querySelector(".swiper-container")
    this.swiperNext = this.el.querySelector(".swiper-button-next") || null
    this.swiperPrev = this.el.querySelector(".swiper-button-prev") || null
    this.paging = this.el.querySelector(".swiper-pagination") || null
    this.delay = parseInt(this.el.getAttribute("data-delay") || 3000) 
    this.register()
  }

  config() {
    return {
      slidesPerView: "auto",
      watchOverflow: true,
      observer : true,
      observeParents: true,
      loop: true,
      pagination: {
        el: this.paging
      },
      autoplay: {
        delay: this.delay,
      },
      breakpoints: {
        768: {
          navigation: {
            nextEl: this.swiperNext,
            prevEl: this.swiperPrev,
          }
        }
      },
      on: {
        init: () => {
          new Banner(this.el)
        }
      }
    }
  }

  register() {
    new Swiper(this.swiperContainer, this.config())
  }
}
