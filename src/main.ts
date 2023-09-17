import { createApp } from 'vue'
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faRotateRight, faCalendar } from '@fortawesome/free-solid-svg-icons'
library.add(faRotateRight, faCalendar)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
