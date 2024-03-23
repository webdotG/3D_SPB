import style from './details.module.scss';
import Img from "../../../PNG/Symbol.png";
import Marginer  from "./marginer/marginer";

export default function Details() {
  return (
    <section className={style['details']}>

<div className={style.detailsContainer}>
      <span className={style.smallText}>LOGO</span>
      <div className={style.spacedHorizontalContainer}>
        <span className={style.mediumText}>пакет такой то охуенный</span>
        <span className={style.mediumText}>$1</span>
      </div>
      <Marginer direction="vertical" margin="1.2em" />
      <div className={style.spacedHorizontalContainer}>
        <span className={style.mediumText}>смотри</span>
        <button className={style.buyButton}>покупай</button>
      </div>
      <div className={style.Logo}>
        <img src={Img} alt="img" />
      </div>
    </div>


    </section>
  )
}
