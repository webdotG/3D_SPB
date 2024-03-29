// import MainTitle from "../main/mainTitle/mainTitle";
import style from './header.module.scss'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={style['header']}>
      <Link to="" className={style['logo-link']}>
        
        logo
      </Link>
      <nav className={style['navigation']}>
        <ul className={style['nav-list']}>
          <li className={style['nav-item']}>
            <Link to='' className={style['nav-link']}>
            возможности
            </Link>
          </li>
          <li className={style['nav-item']}>
            <Link to='' className={style['nav-link']}>
            технологии
            </Link>
          </li>
          <li className={style['nav-item']}>
            <Link to='' className={style['nav-link']}>
            цены
            </Link>
          </li>
          <li className={style['nav-item']}>
            <Link to='' className={style['nav-link']}>
            преимущества
            </Link>
          </li>
          <li className={style['nav-item']}>
            <Link to='' className={style['nav-link']}>
            контакты
            </Link>
          </li>
        </ul>
        <ul className={style['nav-sub']}>
          {/* <li className={style['nav-sub-item']}>
            <button>ру</button>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}
