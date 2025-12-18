import { useEffect, useState } from 'react'
import { fetchProducts } from '../services/products.service'
import { Product } from '../types'


export function useProducts() {
const [products, setProducts] = useState<Product[]>([])
const [loading, setLoading] = useState(true)


useEffect(() => {
fetchProducts().then(data => {
setProducts(data)
setLoading(false)
})
}, [])


return { products, loading }
}