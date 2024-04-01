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

  const [showBusinessAdvantages, setShowBusinessAdvantages] = useState(false);
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
          // className={style['button-business']}
        >
          Для вашего бизнеса
        </button>
        <button onClick={showClients}
        className={`${style['button-clients']} ${showClientAdvantages ? style['button-active'] : ''}`}
          // className={style['button-clients']}
        >
          Для ваших клиентов
        </button>
      </div>

      <section
        className={`${style['advantages-clients']} ${showClientAdvantages ? '' : style['display-none']}`}
      // className={style['advantages-client']}
      >
        <ul className={style['advantages-list']}>
          <li className={style['advantages-item']}>
            <h4>
              Лучшее понимание проекта:
            </h4>
            <p>
              Потенциальные покупатели могут более детально изучить проект, рассмотрев все детали и особенности будущего дома и его окружения, включая виды из окон и планировки.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Возможность принятия более обоснованных решений:
            </h4>
            <p>
              Благодаря 3D макету, покупатели могут лучше понять, как будет выглядеть их будущее жилье, что помогает принимать обоснованные решения при выборе недвижимости.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Экономия времени и удобство:
            </h4>
            <p>
              Виртуальные туры позволяют покупателям осмотреть недвижимость в любое удобное время, не тратя время на поездки к объекту недвижимости.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Возможность настройки:
            </h4>
            <p>
              Покупатели могут использовать 3D макет для настройки интерьера, выбирая цвета, отделку и мебель, что помогает им представить себя живущими в новом доме.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Уменьшение риска ошибок и недоразумений
            </h4>
            <p>
              Благодаря детальной визуализации, потенциальные покупатели могут лучше понять проект и избежать недоразумений или ошибок при выборе и покупке недвижимости
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              3D макет квартиры в Подарок
            </h4>
            <p>
              Каждый покупатель получает в подарок 3D макет, благодаря которому может сделать себе дизайн проект.
            </p>
          </li>
        </ul>
      </section>

      <section
        className={`${style['advantages-business']} ${showBusinessAdvantages ? '' : style['display-none']}`}
      // className={style['advantages-busines']}
      >
        <ul className={style['advantages-list']}>
          <li className={style['advantages-item']}>
            <h4>
              Более высокий уровень доверия к застройщику
            </h4>
            <p>
              Предоставление высококачественного 3D макета свидетельствует о профессионализме и заботе застройщика о будущих владельцах недвижимости, что повышает доверие к компании.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Привлечение клиентов на раннем этапе
            </h4>
            <p>
              Высококачественные визуализации и виртуальные туры привлекают внимание потенциальных покупателей и могут помочь в продаже недвижимости еще до завершения строительства.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Улучшенная коммуникация с клиентами
            </h4>
            <p>
              3D макеты обеспечивают более наглядное представление о проекте, что упрощает коммуникацию с клиентами и помогает согласовывать их требования.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Улучшение маркетинговой стратегии
            </h4>
            <p>
              Привлекательные 3D визуализации позволяют застройщикам эффективно продвигать свои проекты на рынке недвижимости, привлекая больше потенциальных покупателей.
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              УНеограниченное количество контента
            </h4>
            <p>
              Вы можете делать неограниченное количество фото и видео вашего объекта с разных ракурсов
            </p>
          </li>
          <li className={style['advantages-item']}>
            <h4>
              Повышение конкурентоспособности:
            </h4>
            <p>
              Предоставление 3D макета позволяет застройщику выделиться на рынке недвижимости и привлечь больше внимания со стороны потенциальных покупателей.
            </p>
          </li>
        </ul>
      </section>

    </section>
  )
}
