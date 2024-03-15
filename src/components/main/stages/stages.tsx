import style from './stages.module.scss'
import House from '../../../../public/house.jpg'

export default function Stages() {
  return (
    <section className={style['stages']}>
      <h2>Этапы взаимодействия</h2>
      <div className={style['stages-content']}>
        <ul className={style['stages-list']}>
          <li className={style['stages-item']}>
            <p>
            Наш менеджер продукта связывается с Вами и подробно обсуждает будущий проект, помогает составить ТЗ и выбрать нужную конфигурацию.
            </p>
          </li>
          <li className={style['stages-item']}>
            <p>
            Вы присылаете нам файлы (какие)
            </p>
          </li>
          <li className={style['stages-item']}>
            <p>
            После окончательной оценки проекта мы высылаем вам договор на подписание, где указаны ключевые показатели проекта.
            </p>
          </li>
          <li className={style['stages-item']}>
            <p>
            На некоторых предварительных этапах будет проводиться согласование с заказчиком
            </p>
          </li>
          <li className={style['stages-item']}>
            <p>
            Вы получаете готовый продукт с изменениями после правок
            </p>
          </li>
        </ul>
        <div className={style['stages-visual']}>
          <p>Оплата 30% от общей суммы </p>
          <p>Оплата 30% от общей суммы</p>
          <p>Оплата 40% от общей суммы</p>
        </div>
        <img src={House} className={style['technolgy-img']} />
      </div>
    </section>
  )
}
