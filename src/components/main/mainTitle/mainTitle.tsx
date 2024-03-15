import style from './mainTitle.module.scss'
import { Link } from 'react-router-dom'

export default function MainTitle() {
  return (
    <section className={style['main-title']}>
      <video autoPlay muted loop>
        <source src="/dist/3D.mp4" type="video/mp4" />
      </video>
      <div className={style['main-title__text']}>
        <h1 className={style['main-title__title']}>3D визуализация <br />
          на новом уровне
        </h1>
        <p className={style['main-title__paragraph']}>технологии для вашего успеха</p>
      </div>
      <div className={style['main-title__link-wrapper']}>
        <Link className={style['main-title__link']} to="#">свзяаться</Link>
        <Link className={style['main-title__link']} to="#">демо</Link>
      </div>
    </section>
  )
}
