import { createApp } from 'vue';

import App from './app.vue';

let dom = document.createElement('div');
dom.id = 'app';
document.getElementsByTagName('body')[0].appendChild(dom);
createApp(App).mount('#app');