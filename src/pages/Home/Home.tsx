import {FC, useEffect, useState} from 'react';
import styles from './Home.module.scss'
import { ProductService } from '../../services/product.service';
import { useQuery } from 'react-query';
import axios  from 'axios';
import ProductItem from '../../components/ui/product-item/ProductItem';
import Layout from './../../components/Layout/Layout'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Intro from '../../components/Intro/Intro';

const Home:FC = () => { 
   const count = 9
   const {data: products, isLoading } = useQuery(['products', count], () => ProductService.getProducts(count), {
      select: ({data}) => data.products
   }
   )

  return (
   <Layout title=''>
      <Intro/>
      <div className={styles.section}>
         <h2>Shop</h2>
         <a href="/shop" className={styles.icon}><AiOutlineArrowRight/></a>
      </div>
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

export default Home