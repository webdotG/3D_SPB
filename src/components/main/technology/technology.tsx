import style from './technology.module.scss';
import House from '../../../../public/house.jpg'

export default function Technology() {
  return (
    <section className={style['technology-wrapper']}>
      <h2>Технологии</h2>
      <div className={style['technolgy']}>
      <img src={House} className={style['technolgy-img']} />
        <ul className={style['technology-list']}>
          <li>
            <p>Данная технология моделирования самая современная, она появилась в 2023 году.</p>
          </li>
          <li>
            <p>В разработке наших проектов мы используем следующее программное обеспечение: Unreal Engine, 3D MAX, перечислить.</p>
          </li>
          <li>
            <p>Данная технология обладает практически безграничным функционалом и позволяют реализовывать самые креативные идеи.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
