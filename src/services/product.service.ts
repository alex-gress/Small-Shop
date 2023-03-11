import axios from "axios"
import { IProductsResponse } from './../types/product.interface';
import { IProduct } from '../types/product.interface';

axios.defaults.baseURL = 'https://dummyjson.com'

export const ProductService = {
   async getProducts(count: number) {
      const response = axios.get<IProductsResponse>('/products', {
         params: {
            limit: count
         }
      })
      return response
   },

   async getProduct(id: string) {
      const response = await axios.get<IProduct>(`/products/${id}`);

      return response
   }
}