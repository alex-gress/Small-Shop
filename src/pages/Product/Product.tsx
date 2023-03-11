import { FC, useEffect } from 'react';
import styles from './Product.module.scss';
import {useParams} from 'react-router-dom'
import Layout from '../../components/Layout/Layout';
import { useQuery } from 'react-query';
import { ProductService } from '../../services/product.service';
import Button from '../../components/ui/Button/Button';
import Gallery from './galery/Galery';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const Product:FC = () => {
   const params = useParams()
  const {items} = useTypedSelector(state => state.cart)
  const {removeFromCart, addToCart} = useActions()

   const {data, isLoading} = useQuery(['product', params.id ], 
   () => ProductService.getProduct(params.id || ''), {
      select: ({data}) => data
   })
   
   if (!data) {
      return (
      <Layout title="not found">
         Not Found
      </Layout>
      )
   }

   const isInCart = items.some(item => item.id === Number(params.id))

   return (
      <Layout title={data? data?.title: ''}>
         {!isLoading? (
            <>
            {data? (
               <div className={styles.product}>
                  <Gallery  images={data?.images} />
                  <div className={styles.product__desc}><b>Description: </b>{data.description}</div>
                  <div className={styles.product__desc}>
                     <span><b>Brand: </b>{data.brand} </span>
                    <span> <b>Stock: </b>{data.stock}</span>
                  </div>
                  <div className={styles.product__pay}>
                     <Button onClick={() => isInCart ? 
                        removeFromCart(Number(params.id)) : 
                        addToCart(data)
                        }>
                        {isInCart ? 
                           'This product alredy in cart': 
                           'add to cart'
                        }Add To Cart</Button>
                     <span>{data.price}$</span>
                  </div>
               </div>
            ): <div className="text-red-400">Not Found</div>}
            </>
         ): <div className="text-gray-600">Loading...</div>}
      </Layout>
   )
}

export default Product