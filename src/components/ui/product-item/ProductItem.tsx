import {FC} from 'react'
import { IProduct } from '../../../types/product.interface'
import styles from './ProductItem.module.scss';


const ProductItem:FC<{product: IProduct}> = ({product}) => {
  return (
    <div className={styles.product}>
       <div className={styles.product__item}>
        <a href={`/shop/product/${ product.id}`} className={styles.heading}>{product.title}</a>
        <div className={styles.price}>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
          }).format(product.price)}
          </div>
      </div>  
      <img src={product.thumbnail} alt={product.title} />
    </div>
  )
}

export default ProductItem