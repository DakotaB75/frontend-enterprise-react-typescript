import { Product } from '../types'


export async function fetchProducts(): Promise<Product[]> {
return Promise.resolve([
{ id: '1', title: 'Notebook', price: 1200 },
{ id: '2', title: 'Phone', price: 800 },
])
}