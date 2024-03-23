import style from './technology.module.scss';
import TechnologyCard from './technologyCard';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import splitString from '../../../utils/stringSplit';
import { motion, Variants } from 'framer-motion';

const projects = [
  {
    title: "UnrealEngine",
    description: "Unreal Engine - это ведущий игровой движок, который позволяет создавать высококачественные виртуальные миры. Благодаря своей производительности он признан лучшим инструментом для разработки.",
    src: "/unrealEngine.png",
    link: "https://www.unrealengine.com/en-US",
    color: "black"

  },
  {
    title: "Autodesk",
    description: "Autodesk - мировой лидер в области программ для проектирования и инженерии. Используя AutoCAD и 3Ds Max, мы создаём архитектуры и медиа для промышленного производства.",
    src: "/3DAutodesk.svg",
    link: "https://www.autodesk.com/",
    color: "black"
  },
  {
    title: "RizomUV",
    description: "RizomUV - это мощный инструмент для UV-развертки и текстурирования 3D-моделей. Он служит нам для создания текстур, анимаций и визуальных эффектов.",
    src: "/RizomUV.png",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
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
      {
        projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
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
