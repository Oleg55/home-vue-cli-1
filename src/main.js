import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle, faExclamationCircle)

createApp(App).mount('#app')

import 'bootstrap/dist/css/bootstrap.css' 




// import { faStar as fasStar} from '@fortawesome/free-regular-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(fasStar)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })