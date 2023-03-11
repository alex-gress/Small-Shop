import {FC} from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions';
import Layout from '../../components/Layout/Layout';
import ProductItem from '../../components/ui/product-item/ProductItem';
import styles from './../Shop/Shop.module.scss'

const Cart:FC = () => {
  const {items} = useTypedSelector(state => state.cart)

  // const {removeFromCart} = useActions()
  
  return (
    <Layout title='Cart'>
      {items? (
        <div className={styles.products}>
          {items.map((product: string[], index:number) => 
            <ProductItem  key={index} product={product}/>  
          )}
        </div>
      ): <>Products Not Found</>}
    </Layout>
  )
}

export default Cart