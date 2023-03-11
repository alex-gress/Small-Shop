import { FC, useState } from 'react';
import styles from './Gallery.module.scss';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'

const Gallery:FC<{images: string[]}>= ({images}) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   return (
      <div className={styles.gallery}>
         <div className={styles.gallery__image}>

            <img src={images[currentIndex]} alt={images[currentIndex]} />
            <div className={styles.gallery__menu}>
               <h2>{currentIndex+1}</h2>
               <div className={styles.gallery__navigation}>
                  <AiOutlineArrowLeft className={styles.icon} onClick={() => setCurrentIndex(currentIndex-1== -1? images.length: currentIndex-1)}/>
                  <AiOutlineArrowRight className={styles.icon} onClick={() => setCurrentIndex(currentIndex+1<images.length? currentIndex+1: 0)}/>
               </div>
            </div>

         </div>
         <div className={styles.gallery__collection}>
            {images.map((image, index) => 
               <img src={image} alt={image} key={index} onClick={() => setCurrentIndex(index)}  />
            )}
         </div>
      </div>
   )
}

export default Gallery