import { FavoritePage } from '../../pages/Favorite'
import { IndexPage } from '../../pages/Index'

export const routes = [
	{
		path: '/',
		component: IndexPage,
	},
	{
		path: '/favorite',
		component: FavoritePage,
	},
]
