import style from './compare.module.scss'

export default function Compare() {
  return (
    <section className={style['comare-wrapper']}>
      <h2>Сравните</h2>
      <p>Мы освоили технологию, которая значительно отличается по качеству от наших конкурентов. Сравните качество ниже.</p>
      <div className={style['compare']}>
        <div className={style['compare-her']}>
          они
        </div>
        <div className={style['compare-me']}>
          мы
        </div>
      </div>
    </section>
  )
}
