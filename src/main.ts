//要先引入css文件，再引入App组件，否则组件样式会被覆盖掉

import './lib/mui.scss'
import './index.scss'
import App from './App.vue'
import { createApp } from 'vue'
import { router } from './router'




const app = createApp(App)
app.use(router)
app.mount('#app')