import style from './technology.module.scss';
import TechnologyCard from './technologyCard';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import splitString from '../../../utils/stringSplit';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Обзор объектов инфраструктуры',
    description: 'какое то описание',
    src: "",
    color: "tomato"

  },
  {
    title: '3D тур по квартире',
    description: 'какое то описание',
    src: "",
    color: "white"
  },
  {
    title: '2D и 3D планировки',
    description: 'какое то описание',
    src: "",
    color: "black"
  },
  {
    title: 'Наличие свободных или купленных квартир',
    description: 'какое то описание',
    src: "",
    color: "tomato"
  },
  {
    title: 'Фильтрация по параметрам',
    description: 'какое то описание',
    src: "",
    color: "white"
  },
  {
    title: 'Онлайн бронирование',
    description: 'какое то описание',
    src: "",
    color: "black"
  },
  
]

const title = 'Технологии'

export default function Technology() {
  const ref = useRef<HTMLDivElement | null>(null);

  const titleChars = splitString(title);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  }

  const { scrollYProgress } = useScroll({
    target: ref.current ? ref : undefined,
    offset: ['start start', 'end end']
  })

  return (
    <section className={style['technology-wrapper']}>
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
      ))}
      </motion.h2>
      {
        projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.1);
          return <TechnologyCard
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress.get()}
            range={[i * .25, 1]}
            targetScale={targetScale}
          />
        })
      }
    </section>
  )
}
