export const routes = [
  { path: '/', component: () => import('./index.vue') },
  { path: '/about', component: () => import('./about') },
  { path: '/normal', component: () => import('./normal') },
];
