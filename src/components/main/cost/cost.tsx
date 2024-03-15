import style from './cost.module.scss'

export default function Cost() {
  return (
    <section className={style['cost-wrapper']}>
      <h2>Стоимость</h2>
      <p>
        Благодаря тому, что наша команда работает вместе более 5 лет, у нас получилось оптимизировать все рабочие процессы.
        Это позволяет нашим клиентам заказывать проекты дешевле, чем у крупных компаний.
      </p>

      <ul className={style['cost-list-btn']}>
        <li className={style['cost-item-btn']}>
          <button>опция 1</button>
        </li>
        <li className={style['cost-item-btn']}>
          <button>опция 2</button>
        </li>
        <li className={style['cost-item-btn']}>
          <button>опция 3</button>
        </li>
      </ul>

      <ul className={style['cost-list']}>
        <li className={style['cost-item']}>

        </li>
        <li className={style['cost-item']}>

        </li>
        <li className={style['cost-item']}>

        </li>
      </ul>

      <p className={style['dop']}>
        Мы нацелены на долговременное сотрудничество поэтому всем, кто обращается к нам впервые -
        мы делаем скидку 10% от общей стоимости.
      </p>

      <button className={style['sale']}>получить скидку</button>
    </section>
  )
}
