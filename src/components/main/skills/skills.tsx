import style from './skills.module.scss'
import { motion } from "framer-motion";


const skills = [
  '3D тур по МОП',
  'Обзор объектов инфраструктуры',
  'Онлайн бронирование',
  '3D тур по квартире',
  'Онлайн выбор отделки и мебели',
  '2D и 3D планировки',
  'Фильтрация по параметрам',
  'Наличие свободных или купленных квартир',
  'Интеграции объекта в Google Earth'
];

interface SkillItemProps {
  text: string;
  index: number;
}

const SkillItem: React.FC<SkillItemProps>  = ({ text, index } ) => (
  <motion.li
      className={style['content__item']}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.75, delay: index * 0.66}} 
    >
     <p> {text}
     </p>
         </motion.li>
);

export default function Skills() {

  return (
    <section className={style['skills']}>

      <div className={style['main-content']}>

        <div className={`${style['first-content']} ${style['parallax']}`}>

          <ul className={style['content__list']}>
            {skills.map((skill, index) => (
              <SkillItem key={index} text={skill} index={index}/>
            ))}
          </ul>
          <div className={style['content--img-wrapper']}></div>
        </div>

        <div className={style['seconde-conent']}>
          {/*  */}
          <div className={style['content--img-wrapper']}></div>
        </div>

        <div className={style['therd-conent']}>
          {/*  */}
          <div className={style['content--img-wrapper']}></div>
        </div>

      </div>

    </section>
  )
}
