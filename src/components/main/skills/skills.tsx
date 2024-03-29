import React from 'react';
import style from './skills.module.scss'
import { motion } from "framer-motion";
import Video from '/3D.mp4'

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

const SkillItem: React.FC<SkillItemProps> = ({ text, index }) => {

  const delay = index * 0.1;

  return (
    <motion.li
      className={style['content__item']}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.33, delay }}
    >
      <p>
        {text}
      </p>
    </motion.li>
  )
};


export default function Skills() {

  return (
    <section className={style['skills']}>

      <div className={style['main-content']}>

        <div className={`${style['first-content']} ${style['parallax']}`}>

          <motion.ul className={style['content__list']}>
            {skills.map((skill, index) => (
              <SkillItem key={index} text={skill} index={index} />
            ))}
          </motion.ul>
          <div className={style['content--img-wrapper']}>
            <video autoPlay muted loop>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </div>

      </div>

    </section>
  )
}
