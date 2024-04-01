import style from '../advantagesClient/advantages.module.scss'
import splitString from '../../../utils/stringSplit';
import { motion } from 'framer-motion';
import { useState } from 'react';


const title = 'Преимущества'

export default function AdvantagesClient() {
  const titleChars = splitString(title);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  }

  const [showBusinessAdvantages, setShowBusinessAdvantages] = useState(true);
  const [showClientAdvantages, setShowClientAdvantages] = useState(false);

  const showBusiness = () => {
    setShowBusinessAdvantages(true);
    setShowClientAdvantages(false);
  };

  const showClients = () => {
    setShowClientAdvantages(true);
    setShowBusinessAdvantages(false);
  };


  return (

    <section className={style['advantages-title']}>
      <motion.h2
        initial='hidden'
        whileInView='reveal'
        transition={{ staggerChildren: 0.1 }}
      >{titleChars.map(char => (
        <motion.span
          key={char}
          transition={{ duration: 0.5 }}
          variants={charVariants}
        >
          {char}
        </motion.span>
      ))}
      </motion.h2>

      <div className={style['buttons-container']}>
        <button onClick={showBusiness}
          className={`${style['button-business']} ${showBusinessAdvantages ? style['button-active'] : ''}`}
        >
          Для вашего бизнеса
        </button>
        <button onClick={showClients}
          className={`${style['button-clients']} ${showClientAdvantages ? style['button-active'] : ''}`}
        >
          Для ваших клиентов
        </button>
      </div>

      <section
        className={`${style['advantages-clients']} ${showClientAdvantages ? '' : style['display-none']}`}
      >
        <ul className={style['advantages-list']}>
        <li className={style['advantages-item']}>
            <h4>
              Лучшее понимание проекта
            </h4>
            <p>
              Детальная прорисовка обьекта и его окружения:<br/> расположение солнца, виды из окон, планировка.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Фильтры и  настройки
            </h4>
            <p>
              Динамическая настройка интерьера, цвета, отделки и мебели, позволяет почувствовать себя в новом доме.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Принятие решений
            </h4>
            <p>
              3D модель помогает точно понять, как будет выглядеть обьект в будущем.<br/> И провернно повышает конверсию.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              3D макет в Подарок
            </h4>
            <p>
              Каждый клиент получает в подарок 3D макет обьекта, в котором можно сделать дизайн проект.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Время и удобство:
            </h4>
            <p>
              Виртуальные туры позволяют осмотреть недвижимость в любое удобное время.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Уменьшение ошибок
            </h4>
            <p>
              Детальная визуализация помогает избежать недоразумений при выборе недвижимости
            </p>
          </li>
        </ul>
      </section>

      <section
        className={`${style['advantages-business']} ${showBusinessAdvantages ? '' : style['display-none']}`}
      >
        <ul className={style['advantages-list']}>
          <li className={style['advantages-item']}>
            <h4>
              Повышает уровень доверия
            </h4>
            <p>
              Высококачественный 3D макет внушает доверие у будущих владельцев и говорит о профессионализме застройщика.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Клиенты на раннем этапе
            </h4>
            <p>
              Визуализация и Туры привлекают внимание покупателей и помогают в продаже еще до завершения строительства.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Коммуникация с клиентами
            </h4>
            <p>
              Наши технологии упрощают коммуникацию с клиентами и помогают быстрее согласовывать их требования.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Конкурентоспособность
            </h4>
            <p>
              Новые технологии всегда позволяют выделиться на рынке и привлечь больше внимания.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Улучшение маркетинга
            </h4>
            <p>
              3D визуализация позволяет вам максимально эффективно продвигать свои проекты, привлекая покупателей.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Сколько угодно контента
            </h4>
            <p>
              Вы неограниченны в колличестве фото и видео вашего объекта.
            </p>
          </li>

        </ul>
      </section>

    </section>
  )
}
