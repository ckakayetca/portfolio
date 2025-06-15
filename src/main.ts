import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'

createApp(App).mount('#app');


// Set the theme and remove the loading screen
const localStorageTheme = localStorage.getItem('theme')

if (!!localStorageTheme) {
    if (localStorageTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
}

document.querySelector('#loading')?.remove();