import style from './team.module.scss'
import House from '../../../../public/house.jpg'

export default function Team() {
  return (
    <section className={style['team-wrapper']}>
      <h2>Команда</h2>
      <div className={style['team']}>
        <img src={House} className={style['technolgy-img']} />
        <ul className={style['team-list']}>
          <li>
            <p>
              Наша студия занимается созданием 3D моделей с 2019 года. В наш штат входят 10 художников, 3 UX дизайнера, 2 программиста, и т.д.
            </p>
          </li>
          <li>
            <p>
              За это время мы успели реализовать проекты в 25 странах. Нашими клиентами были такие компании как:
            </p>
          </li>
          <li>
            <p>
              За счет того, что все наши специалисты работают удаленно, наши продукты дешевле чем в среднем по рынку, при том, что одни из самых качественных! ???
            </p>
          </li>
          <li>
            <h5>
              Сергей Щеглов
            </h5>
            <h5>
              Юрий Пахомов
            </h5>
            <h5>
              Кирилл Грант
            </h5>
          </li>
        </ul>
      </div>
    </section>
  )
}
