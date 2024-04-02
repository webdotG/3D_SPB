import style from '../advantagesClient/advantages.module.scss';
import splitString from '../../../utils/stringSplit';
import { motion } from 'framer-motion';
import { useState } from 'react';

enum AdvantagesType {
  Business = 'Business',
  Client = 'Client',
}

const advantagesData = {
  Business: [
    {
      title: 'Повышает уровень доверия',
      description: 'Высококачественный 3D макет внушает доверие у будущих владельцев и говорит о профессионализме застройщика.',
    },
    {
      title: 'Клиенты на раннем этапе',
      description: 'Визуализация и Туры привлекают внимание покупателей и помогают в продаже еще до завершения строительства.',
    },
    {
      title: 'Коммуникация с клиентами',
      description: 'Новые технологии всегда позволяют выделиться на рынке и привлечь больше внимания.',
    },
    {
      title: 'Конкурентоспособность',
      description: 'Высококачественный 3D макет внушает доверие у будущих владельцев и говорит о профессионализме застройщика.',
    },
    {
      title: 'Улучшение маркетинга',
      description: '3D визуализация позволяет вам максимально эффективно продвигать свои проекты, привлекая покупателей.',
    },
    {
      title: 'Сколько угодно контента',
      description: 'Вы неограниченны в количестве фото и видео вашего объекта.',
    },
  ],
  Client: [
    {
      title: 'Лучшее понимание проекта',
      description: 'Детальная прорисовка объекта и его окружения: расположение солнца, виды из окон, планировка.',
    },
    {
      title: 'Фильтры и настройки',
      description: 'Динамическая настройка интерьера, цвета, отделки и мебели, позволяет почувствовать себя в новом доме.',
    },
    {
      title: 'Принятие решений',
      description: '3D модель помогает точно понять, как будет выглядеть объект в будущем. Проверенно повышает конверсию.',
    },
    {
      title: '3D макет в Подарок',
      description: 'Каждый клиент получает в подарок 3D макет объекта, в котором можно сделать дизайн проект.',
    },
    {
      title: 'Время и удобство',
      description: 'Виртуальные туры позволяют осмотреть недвижимость в любое удобное время.',
    },
    {
      title: 'Уменьшение ошибок',
      description: 'Детальная визуализация помогает избежать недоразумений при выборе недвижимости.',
    },
  ],
};

const title = 'Преимущества';

export default function AdvantagesClient() {
  const titleChars = splitString(title);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  const [advantagesType, setAdvantagesType] = useState<AdvantagesType>(AdvantagesType.Business);

  const handleAdvantagesToggle = (type: AdvantagesType) => {
    setAdvantagesType(type);
  };

  return (
    <section className={style['advantages-title']}>
      <motion.h2 initial='hidden' whileInView='reveal' transition={{ staggerChildren: 0.1 }}>
        {titleChars.map((char, index) => (
          <motion.span key={index} transition={{ duration: 0.5 }} variants={charVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h2>

      <div className={style['buttons-container']}>
        <button
          onClick={() => handleAdvantagesToggle(AdvantagesType.Business)}
          className={`${advantagesType === AdvantagesType.Business ? style['button-active'] : ''}`}
        >
          Для вашего бизнеса
        </button>
        <button
          onClick={() => handleAdvantagesToggle(AdvantagesType.Client)}
          className={`${advantagesType === AdvantagesType.Client ? style['button-active'] : ''}`}
        >
          Для ваших клиентов
        </button>
      </div>

      <motion.ul className={style['advantages-list']} initial='hidden' animate='reveal'>
        {advantagesData[advantagesType].map((advantage, index) => (
          <motion.li
            className={style['advantages-item']}
            key={`${advantagesType}-${index}`}
            variants={{
              hidden: { opacity: 0, },
              reveal: { opacity: 1, },
            }}
            transition={{ duration: 1, delay: 0.12 * index }}
          >
            <h4>{advantage.title}</h4>
            <p>{advantage.description}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
