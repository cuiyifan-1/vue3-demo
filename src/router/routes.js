export const routes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login.vue'),
		meta: {
			title: '登录'
		}
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/home.vue'),
		meta: {
			title: '首页'
		}
	}
];
