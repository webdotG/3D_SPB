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
        transition={{staggerChildren: 0.1}}
      >{titleChars.map( char => (
        <motion.span
          key={char}
          transition={{duration: 0.5}}
          variants={charVariants}
        >
          {char}
          </motion.span>
      ))}</motion.h2>
      
      <p>
        Более 5 лет мы совершенствовали и оптимизировали рабочие процессы.<br/>
        По этому сегодня мы выполняем проекты быстрее и дешевле, чем крупные компании.
      </p>

      <ul className={style['cost-list-btn']}>
        <li className={style['cost-item-btn']}>
          <button>опция 1</button>
        </li>
        <li className={style['cost-item-btn']}>
          <button>опция 2</button>
        </li>
        <li className={style['cost-item-btn']}>
          <button>опция 3</button>
        </li>
      </ul>

      <ul className={style['cost-list']}>
        <li className={style['cost-item']}>
          
          <div className={style['card-container']}> 
          <Card />
          </div>

        </li>
        <li className={style['cost-item']}>
        <div className={style['card-container']}> 
        <Card />
          </div>
        </li>
        <li className={style['cost-item']}>
        <div className={style['card-container']}> 
        <Card />
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
