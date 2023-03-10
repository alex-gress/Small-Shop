import {FC} from 'react'
import { IProduct } from '../../../types/product.interface'
import styles from './ProductItem.module.scss';


const ProductItem:FC<{product: IProduct}> = ({product}) => {
  return (
    <div className={styles.product}>
      <img src={product.thumbnail} alt={product.title} />
      <div className={styles.heading}>{product.title}</div>
    </div>
  )
}

export default ProductItem