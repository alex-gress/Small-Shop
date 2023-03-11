import {FC, PropsWithChildren} from 'react';
import styles from './Layout.module.scss'


const Layout:FC<PropsWithChildren<{title:string}>> = ({children, title}) => {
  return (
    <div className={styles.layout}>
      {title && <div className={styles.heading}>{title}</div>}
      {children}
    </div>
  )
}

export default Layout