import style from './stages.module.scss'
// import House from '../../../../public/house.jpg'

import { motion } from 'framer-motion';

export default function Stages() {


  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };


  return (
    <section className={style['stages']}>
      <h2>Этапы взаимодействия</h2>
      <div className={style['stages-content']}>
        <ul className={style['stages-list']}>
          <li className={style['stages-item']}>
            <p>
              Наш менеджер продукта связывается с Вами и подробно обсуждает будущий проект, помогает составить ТЗ и выбрать нужную конфигурацию.
            </p>
          </li>
          <li className={style['stages-item']}>
            <p>
              Вы присылаете нам файлы (какие)
            </p>
          </li>
          <li className={style['stages-item']}>
            <p>
              После окончательной оценки проекта мы высылаем вам договор на подписание, где указаны ключевые показатели проекта.
            </p>
          </li>
          <li className={style['stages-item']}>
            <p>
              На некоторых предварительных этапах будет проводиться согласование с заказчиком
            </p>
          </li>
          <li className={style['stages-item']}>
            <p>
              Вы получаете готовый продукт с изменениями после правок
            </p>
          </li>
        </ul>
        <div className={style['stages-visual']}>
        <p>Оплата 30% от общей суммы </p>
          <p>Оплата 30% от общей суммы</p>
          <p>Оплата 40% от общей суммы</p>
          <div className={style['stages-visual-svg']}>

            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={style['Circle']} width="45px" height="45px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <motion.circle cx="16" cy="16" r="16"
                initial="hidden"
                animate="visible"
                transition={{ duration: 3, delay: 0.2, repeat: Infinity  }}
                variants={variants}
              />
            </motion.svg>
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={style['Dotted']} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 270 270" xmlSpace="preserve"
              >
              <g id="XMLID_508_">
                <motion.circle cx="120" cy="25" r="16"
                initial="hidden"
                animate="visible"
                transition={{ duration: 3, delay: 0.4, repeat: Infinity }}
                variants={variants} 
                />
                <motion.circle cx="120" cy="102" r="16"
                initial="hidden"
                animate="visible"
                transition={{ duration: 3, delay: 0.6, repeat: Infinity }}
                variants={variants}
                />
                <motion.circle cx="120" cy="176" r="16" 
                initial="hidden"
                animate="visible"
                transition={{ duration: 3, delay: 0.8, repeat: Infinity }}
                variants={variants}
                />
                <motion.circle cx="120" cy="250" r="16" 
                initial="hidden"
                animate="visible"
                transition={{ duration: 3, delay: 1, repeat: Infinity }}
                variants={variants}
                />
              </g>
            </motion.svg>
            <svg className={style['Circle']} width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" />
            </svg>
            <svg className={style['Dotted']} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 270 270" xmlSpace="preserve">
              
            </svg>
            <svg className={style['Circle']} width="45px" height="45px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" />
            </svg>
            <svg className={style['Dotted']} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 270 270" xmlSpace="preserve">
              <g id="XMLID_508_">
                <circle cx="120" cy="25" r="16" />
                <circle cx="120" cy="102" r="16" />
                <circle cx="120" cy="176" r="16" />
                <circle cx="120" cy="250" r="16" />
              </g>
            </svg>
            <svg className={style['Circle']} width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" />
            </svg>
            <svg className={style['Dotted']} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 270 270" xmlSpace="preserve">
              <g id="XMLID_508_">
                <circle cx="120" cy="25" r="16" />
                <circle cx="120" cy="102" r="16" />
                <circle cx="120" cy="176" r="16" />
                <circle cx="120" cy="250" r="16" />
              </g>
            </svg>
            <svg className={style['Circle']} width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" />
            </svg>

          </div>

         
        </div>
      </div>
    </section>
  )
}
