import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle, faExclamationCircle)

import 'animate.css';

createApp(App).mount('#app')


//importing bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";





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