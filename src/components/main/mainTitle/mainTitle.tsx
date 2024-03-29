import style from './mainTitle.module.scss'
import { Link } from 'react-router-dom'
import Video from '/3D.mp4'
import {motion} from 'framer-motion';

const scrollBtnVariants = {
  hidden: { opacity: 0,  },
  visible: {
    opacity: 1,
    transition: { 
      duration: 5,
      repeat: Infinity,
    }
  }
}

export default function MainTitle() {
  return (
    <section className={style['main-title']}>
      <div className={style['scroll-down']}>
        <motion.svg 
        initial="hidden"
        animate="visible"
        variants={scrollBtnVariants}
        width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" />
          <path d="M12 6V14" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 11L12 14L9 11" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </div>
      <video autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
      <div className={style['main-title__text']}>
        <h1 className={style['main-title__title']}>3D визуализация <br />
          на новом уровне
        </h1>
        <p className={style['main-title__paragraph']}>готовое маркетинговое решение<br />
          для вашего бизнеса</p>
      </div>
      <div className={style['main-title__link-wrapper']}>
        <Link className={style['main-title__link']} to="#">
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M11.0748 7.50835C9.74622 6.72395 8.25 7.79065 8.25 9.21316V14.7868C8.25 16.2093 9.74622 17.276 11.0748 16.4916L15.795 13.7048C17.0683 12.953 17.0683 11.047 15.795 10.2952L11.0748 7.50835ZM9.75 9.21316C9.75 9.01468 9.84615 8.87585 9.95947 8.80498C10.0691 8.73641 10.1919 8.72898 10.3122 8.80003L15.0324 11.5869C15.165 11.6652 15.25 11.8148 15.25 12C15.25 12.1852 15.165 12.3348 15.0324 12.4131L10.3122 15.2C10.1919 15.271 10.0691 15.2636 9.95947 15.195C9.84615 15.1242 9.75 14.9853 9.75 14.7868V9.21316Z" />
            <path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" />
          </svg>
          смотреть демо</Link>
      </div>
    </section>
  )
}
