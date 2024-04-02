import style from './stages.module.scss'
import { motion } from 'framer-motion';
import splitString from '../../../utils/stringSplit';


const title = 'Взамодействие';

export default function Stages() {
  const titleChars = splitString(title);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };


  return (
    <section className={style['stages']}>
      
      <motion.h2 initial='hidden' whileInView='reveal' transition={{ staggerChildren: 0.1 }}>
        {titleChars.map((char, index) => (
          <motion.span key={index} transition={{ duration: 0.5 }} variants={charVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h2>

      <div className={style['stages-content']}>

        <ul className={style['stages-list']}>
          <li className={style['stages-item']}>
            <p>
              Мы свяжемся с вами и поможем составить подробное ТЗ
            </p>
          </li>
          <li className={style['stages-item']}>
            <p>
              Вы присылаете нам файлы (какие)
            </p>
          </li>
          <li className={style['stages-item']}>
            <p>
              После оценки мы высылаем договор, с ключевыми показателями проекта.
            </p>
          </li>
          <li className={style['stages-item']}>
            <p>
              На оговоренных этапах проводятся согласования и правки
            </p>
          </li>
          <li className={style['stages-item']}>
            <p>
              Вы получаете готовый продукт и закрываем сделку
            </p>
          </li>
        </ul>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={style['stages-visual']}>

          <motion.p
            initial="hidden"
            animate="visible"
            transition={{ duration: 12, delay: 1.2, repeat: Infinity, }}
            variants={variants}
            className={style['conditionFirst']}>
            30% от общей суммы
          </motion.p>
          <motion.p
            initial="hidden"
            animate="visible"
            transition={{ duration: 12, delay: 3, repeat: Infinity, }}
            variants={variants}
            className={style['conditionSecond']}>
            30% от общей суммы
          </motion.p>
          <motion.p
            initial="hidden"
            animate="visible"
            transition={{ duration: 12, delay: 4.2, repeat: Infinity, }}
            variants={variants}
            className={style['conditionThirth']}>
            40% от общей суммы
          </motion.p>

          <div className={style['stages-visual-svg']}>

            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={style['Circle']} width="45px" height="45px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <motion.circle cx="16" cy="16" r="16"
                initial="hidden"
                animate="visible"
                transition={{ duration: 12, delay: 0.2, repeat: Infinity, }}
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
                  transition={{ duration: 12, delay: 0.4, repeat: Infinity }}
                  variants={variants}
                />
                <motion.circle cx="120" cy="102" r="16"
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 12, delay: 0.6, repeat: Infinity }}
                  variants={variants}
                />
                <motion.circle cx="120" cy="176" r="16"
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 12, delay: 0.8, repeat: Infinity }}
                  variants={variants}
                />
                <motion.circle cx="120" cy="250" r="16"
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 12, delay: 1, repeat: Infinity }}
                  variants={variants}
                />
              </g>
            </motion.svg>
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={style['Circle']} width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <motion.circle cx="16" cy="16" r="16"
                initial="hidden"
                animate="visible"
                transition={{ duration: 12, delay: 1.2, repeat: Infinity }}
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
                  transition={{ duration: 12, delay: 1.4, repeat: Infinity }}
                  variants={variants}
                />
                <motion.circle cx="120" cy="102" r="16"
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 12, delay: 1.6, repeat: Infinity }}
                  variants={variants}
                />
                <motion.circle cx="120" cy="176" r="16"
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 12, delay: 1.8, repeat: Infinity }}
                  variants={variants}
                />
                <motion.circle cx="120" cy="250" r="16"
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 12, delay: 2, repeat: Infinity }}
                  variants={variants}
                />
              </g>
            </motion.svg>
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={style['Circle']} width="45px" height="45px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <motion.circle cx="16" cy="16" r="16"
                initial="hidden"
                animate="visible"
                transition={{ duration: 12, delay: 2.2, repeat: Infinity }}
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
                  transition={{ duration: 12, delay: 2.4, repeat: Infinity }}
                  variants={variants}
                />
                <motion.circle cx="120" cy="102" r="16"
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 12, delay: 2.6, repeat: Infinity }}
                  variants={variants}
                />
                <motion.circle cx="120" cy="176" r="16"
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 12, delay: 2.8, repeat: Infinity }}
                  variants={variants}
                />
                <motion.circle cx="120" cy="250" r="16"
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 12, delay: 3, repeat: Infinity }}
                  variants={variants}
                />
              </g>
            </motion.svg>
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={style['Circle']} width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <motion.circle cx="16" cy="16" r="16"
                initial="hidden"
                animate="visible"
                transition={{ duration: 12, delay: 3.2, repeat: Infinity }}
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
                  transition={{ duration: 12, delay: 3.4, repeat: Infinity }}
                  variants={variants}
                />
                <motion.circle cx="120" cy="102" r="16"
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 12, delay: 3.6, repeat: Infinity }}
                  variants={variants}
                />
                <motion.circle cx="120" cy="176" r="16"
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 12, ease: 'easeInOut', delay: 3.8, repeat: Infinity }}
                  variants={variants}
                />
                <motion.circle cx="120" cy="250" r="16"
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 12, ease: 'easeInOut', delay: 4, repeat: Infinity }}
                  variants={variants}
                />
              </g>
            </motion.svg>
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={style['Circle']} width="45px" height="45px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <motion.circle cx="16" cy="16" r="16"
                initial="hidden"
                animate="visible"
                transition={{ duration: 12, ease: 'easeInOut', delay: 4.2, repeat: Infinity }}
                variants={variants}
              />
            </motion.svg>

          </div>


        </motion.div>
      </div>
    </section>
  )
}
