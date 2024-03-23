import style from './technology.module.scss';
import TechnologyCard from './technologyCard';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: "UnrealEngine",
    description: "Unreal Engine - это ведущий игровой движок, который позволяет разработчикам создавать высококачественные игры и виртуальные миры. Он обладает удобным интерфейсом и обширным набором инструментов для реализации различных идей. Благодаря своей гибкости и производительности, Unreal Engine является выбором номер один для многих профессиональных разработчиков.",
    src: "unrealEngine.png",
    link: "https://www.unrealengine.com/en-US",
    color: "black"

  },
  {
    title: "Autodesk",
    description: "Autodesk - мировой лидер в области программного обеспечения для проектирования, инженерии и разработки. Их продукты, такие как AutoCAD, Maya и 3ds Max, широко используются в различных отраслях, включая архитектуру, медиа и промышленное производство. С помощью инновационных инструментов и технологий Autodesk, профессионалы могут создавать удивительные проекты и воплощать свои творческие идеи в реальность.",
    src: "3DAutodesk.svg",
    link: "https://www.autodesk.com/",
    color: "black"
  },
  {
    title: "RizomUV",
    description: "RizomUV - это мощный инструмент для развертки и текстурирования 3D-моделей. Он предоставляет широкие возможности для работы с UV-разверткой, позволяя художникам и дизайнерам эффективно управлять текстурными координатами. Благодаря интуитивно понятному интерфейсу и высокой производительности, RizomUV становится незаменимым инструментом в процессе создания игр, анимаций и визуальных эффектов.",
    src: "RizomUV.png",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "black"
  },

]


export default function Technology() {

  const ref = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref.current ? ref : undefined,
    offset: ['start start', 'end end']
  })

  return (
    <section className={style['technology-wrapper']}>
      <h2>Технологии</h2>
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
