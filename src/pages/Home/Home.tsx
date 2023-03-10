import {FC, useEffect, useState} from 'react';
import styles from './Home.module.scss'
import { ProductService } from '../../services/product.service';
import { useQuery } from 'react-query';
import axios  from 'axios';
import ProductItem from '../../components/ui/product-item/ProductItem';

const Home:FC = () => { 
   const {data: products, isLoading } = useQuery('products', () => ProductService.getProducts(), {
      select: ({data}) => data.products
   }
   )

   // const [products, setProducts] = useState<any[]>([])
   // const [data, setData] = useState<any[]>([])
   // const [error, setError] = useState<string>('')
   // const [isLoading, setIsLoading] = useState<boolean>(false)

   // useEffect(() => {
   //    ProductService.getProducts()
   //       .then((res:any) => {
   //          setProducts(res.data.products); 
   //          setData(res.data);
   //       })
   //       .catch((err:any) => console.error(err))
   //       .finally(() => setIsLoading(true))
   // }, [])

  return (
   <h1 className={styles.bg}>
      {/* {error && <div className='bg-red-400 text-gray-900 p-2 mb-2 font-bold rounded-xl shadow-lg' >{error}</div>} */}
      {!isLoading? (
         <>
            {products? (
               <div className=''>
                  {products.map((product,index) => 
                     <ProductItem  key={index} product={product}/>  
                  )}
               </div>
            ): (<>Products Not Found</>)}
         </>
      ): (<div className="text-blue-500">Loadding...</div>)} 
   </h1>
  )
}

export default Home