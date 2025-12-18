import { createBrowserRouter } from 'react-router-dom'
import { lazyRoute } from '../performance/lazy'


export const router = createBrowserRouter([
{
path: '/',
lazy: lazyRoute(() => import('../modules/products/pages/ProductsPage')),
},
])