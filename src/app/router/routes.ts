import { FavoritePage } from '../../pages/Favorite'
import { IndexPage } from '../../pages/Index'
import { DefaultLayout } from '../../shared'
import { NotFound } from '../../widgets/NotFound'

export const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        component: IndexPage,
      },
      {
        path: '/favorite',
        component: FavoritePage,
      },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]
