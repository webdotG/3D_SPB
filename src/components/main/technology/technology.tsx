import style from './technology.module.scss';
import TechnologyCard from './technologyCard';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import splitString from '../../../utils/stringSplit';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Обзор объектов инфраструктуры',
    description: 'Полезно как при выборе места для проживания так и для размещения бизнеса.',
    descriptionTwo:  ' Позволяет детально изучить окружающую инфраструктуру и оценить доступность объектов:  магазины, школы или медицинские учреждения.',
    src: "video1.mp4",
    color: "black"

  },
  {
    title: '3D тур по обьекту',
    description: 'Cильно упрощает процесс выбора и обеспечивает реалистичное представление.',
    descriptionTwo: 'Позволяет виртуально исследовать внутреннее пространство помещения.',
    src: "video2.mp4",
    color: "black"
  },
  {
    title: '2D и 3D планировки',
    description: 'Предоставляем трехмерные модели и двухмерные схемы помещений. ',
    descriptionTwo: 'Полезно при визуализации дизайна и для обнаружения потенциальных проблем или несоответствий в планировке до начала реальных работ.',
    src: "video3.mp4",
    color: "black"
  },
  {
    title: 'Наличие свободных или купленных квартир',
    description: 'Помогает соориентироваться в доступных вариантах и принять информированное решение.',
    descriptionTwo:'Эта опция позволяет получить полную картину о текущем состоянии рынка недвижимости и предложениях в данном районе или комплексе.',
    src: "video4.mp4",
    color: "black"
  },
  {
    title: 'Фильтрация по параметрам',
    description: 'Экономит время, исключая из рассмотрения неподходящие варианты, сосредотачивая внимание на наиболее подходящих обьектах.',
    descriptionTwo: 'Позволяет учитывать ключевые факторы, такие как площадь, цена, расположение и другие параметры.',
    src: "video5.mp4",
    color: "black"
  },
  {
    title: 'Онлайн бронирование',
    description: 'Позволяет быстро и удобно забронировать желаемый объект, экономя время на личном присутствии. ',
    descriptionTwo: 'Ускоряет процесс сделки и снижает риск потери интересующего объекта.',
    src: "video6.mp4",
    color: "black"
  },
  
]

const title = 'Возможности'

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
            range={[i * .12, 1]}
            targetScale={targetScale}
          />
        })
      }
    </section>
  )
}
