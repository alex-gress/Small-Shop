import {FC} from 'react';
import styles from './Header.module.scss'

const Header:FC = () => {
  return (
    <div className={styles.header}>
      <a href='/' className={styles.header__logo}>DummyJSON</a>
      <div className={styles.header__menu}>
         <a href="/shop">Shop</a>
         <a href="/cart">Cart</a>
         <a href="https://dummyjson.com/">API</a>
      </div>
    </div>
  )
}

export default Header