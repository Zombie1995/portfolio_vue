import { createApp } from 'vue';
import './index.css';
import App from './index.vue';
import { router } from './providers';

export const app = createApp(App).use(router);
