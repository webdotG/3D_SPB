import style from './stages.module.scss'
// import House from '../../../../public/house.jpg'

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

          <div className={style['stages-visual-svg']}>

            <svg fill="#000000" width="45px" height="45px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" />
            </svg>
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 270 270" xmlSpace="preserve">
              <g id="XMLID_508_">
                <rect id="XMLID_509_" x="120" width="10" height="10" />
                <rect id="XMLID_510_" x="120" y="60" width="10" height="10" />
                <rect id="XMLID_511_" x="120" y="120" width="10" height="10" />
                <rect id="XMLID_512_" x="120" y="180" width="10" height="10" />
                <rect id="XMLID_515_" x="120" y="240" width="10" height="10" />
              </g>
            </svg>
            <svg fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" />
            </svg>
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 270 270" xmlSpace="preserve">
              <g id="XMLID_508_">
                <rect id="XMLID_509_" x="120" width="10" height="10" />
                <rect id="XMLID_510_" x="120" y="60" width="10" height="10" />
                <rect id="XMLID_511_" x="120" y="120" width="10" height="10" />
                <rect id="XMLID_512_" x="120" y="180" width="10" height="10" />
                <rect id="XMLID_515_" x="120" y="240" width="10" height="10" />
              </g>
            </svg>
            <svg fill="#000000" width="45px" height="45px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" />
            </svg>
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 270 270" xmlSpace="preserve">
              <g id="XMLID_508_">
                <rect id="XMLID_509_" x="120" width="10" height="10" />
                <rect id="XMLID_510_" x="120" y="60" width="10" height="10" />
                <rect id="XMLID_511_" x="120" y="120" width="10" height="10" />
                <rect id="XMLID_512_" x="120" y="180" width="10" height="10" />
                <rect id="XMLID_515_" x="120" y="240" width="10" height="10" />
              </g>
            </svg>
            <svg fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" />
            </svg>
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 270 270" xmlSpace="preserve">
              <g id="XMLID_508_">
                <rect id="XMLID_509_" x="120" width="10" height="10" />
                <rect id="XMLID_510_" x="120" y="60" width="10" height="10" />
                <rect id="XMLID_511_" x="120" y="120" width="10" height="10" />
                <rect id="XMLID_512_" x="120" y="180" width="10" height="10" />
                <rect id="XMLID_515_" x="120" y="240" width="10" height="10" />
              </g>
            </svg>
            <svg fill="#000000" width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" />
            </svg>

          </div>

          <p>Оплата 30% от общей суммы </p>
          <p>Оплата 30% от общей суммы</p>
          <p>Оплата 40% от общей суммы</p>
        </div>
        <img src='#' className={style['technolgy-img']} />
      </div>
    </section>
  )
}
