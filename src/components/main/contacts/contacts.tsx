import { Link } from 'react-router-dom'
import style from './contacts.module.scss'

export default function Contacts() {
  return (
    <section className={style['contacts-wrapper']}>
      <h2>Контакты</h2>

      <div className={style['wrapper']}>

        <div className={style['contacts-form-wrapper']}>
          <h3>отправить емэйл</h3>
          <form className={style['contacts-form']}>
            <label>
            имя
              <input type='' />
            </label>
            <label>
            имейл
              <input type='' />
            </label>
            <label>
            комментарий
              <textarea rows={4} cols={5} />
            </label>
          </form>
        </div>

        <div className={style['contacts-tel']}>
          <ul>
            <li>
              <Link to=''>+7123456789</Link>
            </li>
            <li>
              <Link to=''>123@123.com</Link>
            </li>
            <li>
              <Link to=''>SPB Komenda</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
