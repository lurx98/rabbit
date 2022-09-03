import skeleton from '@/components/skeleton/index.vue'
import carousel from '@/components/carousel/index.vue'
import more from '@/components/more/index.vue'
import { useIntersectionObserver } from '@vueuse/core'
import defaultImg from '@/assets/images/200.png'
import { App } from 'vue'
export default {
  install(app: App) {
    app.component(skeleton.name, skeleton)
    app.component(carousel.name, carousel)
    app.component(more.name, more)
    app.directive('lazy', {
      mounted(el: HTMLImageElement, { value }) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            stop()
            el.src = value
            el.onerror = function () {
              el.src = defaultImg
            }
          }
        })
      }
    })
  }
}
