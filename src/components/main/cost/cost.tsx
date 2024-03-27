import style from './cost.module.scss'
import splitString from '../../../utils/stringSplit';
import { motion } from 'framer-motion';
import Card from './card';



const title = 'Стоимость'

export default function Cost() {

  const titleChars = splitString(title);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  }


  return (
    <section className={style['cost-wrapper']}>
      <motion.h2
        initial='hidden'
        whileInView='reveal'
        transition={{ staggerChildren: 0.1 }}
      >{titleChars.map(char => (
        <motion.span
          key={char}
          transition={{ duration: 0.5 }}
          variants={charVariants}
        >
          {char}
        </motion.span>
      ))}</motion.h2>

      <p>
        Более 5 лет мы совершенствовали и оптимизировали рабочие процессы.<br />
        По этому сегодня мы выполняем проекты быстрее и дешевле, чем крупные компании.
      </p>

      {/* <ul className={style['cost-list-btn']}>
        <li className={style['cost-item-btn']}>
          <button>
            
          </button>
        </li>
        <li className={style['cost-item-btn']}>
          <button>
            
          </button>
        </li>
        <li className={style['cost-item-btn']}>
          <button>
            
          </button>
        </li>
      </ul> */}

      <ul className={style['cost-list']}>
        <li className={style['cost-item']}>

          <div className={style['card-container']}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13,22.5,7.82,17.36a2,2,0,0,1-.59-1.43,2,2,0,0,1,2-2,2,2,0,0,1,1.43.59L12,15.82V6.38a2,2,0,0,1,1.74-2,1.87,1.87,0,0,1,1.51.56,1.83,1.83,0,0,1,.57,1.34V12l5,.72a1.91,1.91,0,0,1,1.64,1.89h0a17.18,17.18,0,0,1-1.82,7.71l-.09.18" /><path d="M15.82,10.64a4.54,4.54,0,0,0,1.47-1,4.78,4.78,0,1,0-6.76,0,4.54,4.54,0,0,0,1.47,1" /><polyline points="4.36 9.14 1.5 6.27 4.36 3.41" />
              <line x1="9.14" y1="6.27" x2="1.5" y2="6.27" />
            </svg>
            <Card cardType='first' />
          </div>

        </li>
        <li className={style['cost-item']}>
          <div className={style['card-container']}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13,22.5,7.82,17.36a2,2,0,0,1-.59-1.43,2,2,0,0,1,2-2,2,2,0,0,1,1.43.59L12,15.82V6.38a2,2,0,0,1,1.74-2,1.87,1.87,0,0,1,1.51.56,1.83,1.83,0,0,1,.57,1.34V12l5,.72a1.91,1.91,0,0,1,1.64,1.89h0a17.18,17.18,0,0,1-1.82,7.71l-.09.18" />
              <path d="M15.82,10.64a4.54,4.54,0,0,0,1.47-1,4.78,4.78,0,1,0-6.76,0,4.54,4.54,0,0,0,1.47,1" />
              <polyline points="1.5 5.32 4.36 2.45 7.23 5.32" />
              <line x1="4.36" y1="12" x2="4.36" y2="2.45" />
            </svg>
            <Card cardType='second' />
          </div>
        </li>
        <li className={style['cost-item']}>
          <div className={style['card-container']}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.2,22.45,3.09,17.34a2,2,0,0,1,2.85-2.85L7.25,15.8V6.41A2,2,0,0,1,9,4.41,1.91,1.91,0,0,1,11.05,6.3V12l5,.72A1.9,1.9,0,0,1,17.7,14.6h0a17.16,17.16,0,0,1-1.81,7.67l-.09.18" />
              <path d="M11.05,10.65a4.4,4.4,0,0,0,1.46-1,4.75,4.75,0,1,0-6.72,0,4.4,4.4,0,0,0,1.46,1" />
              <polyline points="18.65 3.45 21.5 6.3 18.65 9.15" />
              <line x1="13.9" y1="6.3" x2="21.5" y2="6.3" />
            </svg>
            <Card cardType='third' />
          </div>
        </li>
      </ul>

      <p className={style['dop']}>
        Мы нацелены на долговременное сотрудничество поэтому всем, кто обращается к нам впервые -
        мы делаем скидку 10% от общей стоимости.
      </p>

      <button className={style['sale']}>получить скидку</button>
    </section>
  )
}
