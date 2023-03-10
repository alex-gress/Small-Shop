export interface IProductsResponse {
   products: IProduct[]
   limit: number
   skip: number
}

export interface IProduct {
   brand: string
   categories: string
   description: string
   discountPercentage: number
   id: number
   images: string[]
   price: number
   rating: number
   stock: number
   thumbnail: string
   title: string
}