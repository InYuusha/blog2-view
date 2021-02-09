import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faSpinner,faCog} from '@fortawesome/free-solid-svg-icons';
library.add(faCoffee,faSpinner,faCog)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
