import {FC} from 'react';
import styles from './Intro.module.scss';
import {AiOutlineArrowRight} from 'react-icons/ai'

const Intro:FC = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.intro__image}>
         <img src="https://images.pexels.com/photos/768938/pexels-photo-768938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
         <span></span>
      </div>
      <div className={styles.intro__item}>
         <h2 className="">DummyJSON</h2>
         <p>Get dummy/fake JSON data to use as placeholder in development or in prototype testing.</p>
      </div>
    </div>
  )
}

export default Intro