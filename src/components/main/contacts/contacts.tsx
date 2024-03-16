import { Link } from 'react-router-dom'
import style from './contacts.module.scss'

export default function Contacts() {
  return (
    <section className={style['contacts-wrapper']}>
      <h2>Контакты</h2>

      <div className={style['wrapper']}>

        <div className={style['contacts-form-wrapper']}>
          {/* <h3>отправить емэйл</h3> */}
          <form className={style['contacts-form']}>
            <label className={style['custom-field']}>
            <p>имя</p>
              <input type='text' className={style['contacts-input']} required/>
            </label>
            <label>
            <p>мейл</p>
              <input type='email' className={style['contacts-input']} required/>
            </label>
            <label>
            <p>комментарий</p>
              <textarea rows={4} cols={5} className={style['contacts-textarea']}/>
            </label>
            <button type='submit' className={style['submit-btn']}>отправить</button>
          </form>
        </div>

        <div className={style['contacts-tel']}>
          <ul className={style['contacts-tel-list']}>
            <li>
              <Link className={style['contacts-tel-link']} to=''>+7123456789</Link>
            </li>
            <li>
              <Link className={style['contacts-tel-link']} to=''>123@123.com</Link>
            </li>
            <li>
              <Link className={style['contacts-tel-link']} to=''>SPB Komenda</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
