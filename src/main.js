// 方式一：使用带有 template 实现 DOM，要求使用 vue 的 runtime + compiler 版本
// import { createApp } from 'vue/dist/vue.esm-browser.js'
// createApp({
//     template:'<h1>this is h1!</h1>'
// }).mount('#container');

// 方式二：使用 render 函数实现 DOM，只需要使用 vue 的 runtime 版本
// import { createApp, h } from 'vue'
// createApp({
//     render(){
//         return h('h1','this is h1!')
//     }
// }).mount('#container');

// 方式三：使用 .vue 文件实现 DOM，需要: 构建工具 + loaders + plugins
//  vue-loader@next + @vue/compiler-sfc + 
import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#container');