import skeleton from '@/components/skeleton/index.vue'
import carousel from '@/components/carousel/index.vue'
import { App } from 'vue'
export default {
  install(app: App) {
    app.component(skeleton.name, skeleton)
    app.component(carousel.name, carousel)
  }
}
