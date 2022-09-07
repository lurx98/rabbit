import skeleton from '@/components/skeleton/index.vue'
import carousel from '@/components/carousel/index.vue'
import more from '@/components/more/index.vue'
import bread from './Bread/index.vue'
import breadItem from './Bread/Item.vue'
import city from './city/index.vue'

import { useIntersectionObserver } from '@vueuse/core'
import defaultImg from '@/assets/images/200.png'
import { App } from 'vue'
export default {
  install(app: App) {
    app.component(skeleton.name, skeleton)
    app.component(carousel.name, carousel)
    app.component(more.name, more)
    app.component(bread.name, bread)
    app.component(breadItem.name, breadItem)
    app.component(city.name, city)
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
