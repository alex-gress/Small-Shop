import {FC, useLayoutEffect, useEffect, useState, useRef} from 'react';
import styles from './Shop.module.scss'
import { ProductService } from '../../services/product.service';
import { useQuery } from 'react-query';
import axios  from 'axios';
import ProductItem from '../../components/ui/product-item/ProductItem';
import Layout from './../../components/Layout/Layout';

const Shop:FC = () => { 
   const h2ref = useRef(null);
   const [count, setCount] = useState(12)

   const {data: products, isLoading } = useQuery(['products', count], () => ProductService.getProducts(count), {
      select: ({data}) => data.products
   }
   )

   useLayoutEffect(() => {
      // h2ref.current.scrollIntoView();
    }, []);
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
   <Layout title='Shop The Collection'>
      {/* {error && <div className='bg-red-400 text-gray-900 p-2 mb-2 font-bold rounded-xl shadow-lg' >{error}</div>} */}
      {!isLoading? (
         <>
            {products? (
               <div className={styles.products}>
                  {products.map((product,index) => 
                     <ProductItem  key={index} product={product}/>  
                  )}
               </div>
            ): (<>Products Not Found</>)}
         </>
      ): (<div className="text-orange-500">Loadding...</div>)} 
   </Layout>
  )
}

export default Shop