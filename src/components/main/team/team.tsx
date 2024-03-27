import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import style from './team.module.scss';
import Kirill from '../../../SVG/sponsors/logo-reddit-svgrepo-com.svg';
import Sergei from '../../../SVG/sponsors/logo-steam-svgrepo-com.svg';
import Yra from '../../../SVG/sponsors/logo-tux-svgrepo-com.svg';
import Nastya from '../../../SVG/sponsors/logo-xbox-svgrepo-com.svg';
import Coding from '../../../GIF/coding.gif'
import Visual from '../../../GIF/3D.gif'
import Rieltor from '../../../GIF/rieltor.gif'
import Designer from '../../../GIF/designer.gif'

const cards = [
  {
    name: 'Kirill',
    position: 'Frontend developer',
    imgSrc: Kirill,
    description: 'bla bla bla',
    gif: Coding,
  },
  {
    name: 'Sergei',
    position: '3D Artist',
    imgSrc: Sergei,
    description: 'bla bla bla',
    gif: Visual,
  },
  {
    name: 'Yra',
    position: 'Prodagnik',
    imgSrc: Yra,
    description: 'bla bla bla',
    gif: Rieltor,
  },
  {
    name: 'Nastya',
    position: 'Designer',
    imgSrc: Nastya,
    description: 'bla bla bla',
    gif: Designer,
  },
];

export default function Team() {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [isFlipped, setIsFlipped] = useState(Array(cards.length).fill(false));
  const [isActive, setIsActive] = useState(Array(cards.length).fill(false));
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsFlipped(Array(cards.length).fill(false));
    setIsFlipped(prevState => {
      const newState = [...prevState];
      newState[currentSlide] = true;
      return newState;
    });
  }, [currentSlide]);

  const handleFlip = (index: number) => {
    if (!isAnimated) {
      const newFlippedState = Array(cards.length).fill(false);
      newFlippedState[index] = !isFlipped[index];
      setIsFlipped(newFlippedState);

      const newActiveState = Array(cards.length).fill(false);
      newActiveState[index] = true;
      setIsActive(newActiveState);

      setIsAnimated(true);
    }
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    console.log(`Выбран слайд с индексом ${index}`);
  };

  return (
    <section className={style['team-wrapper']}>
      <div className={style['slider']}>

        <div className={style['cards']}>
          {cards.map((card, index) => {
            const isActiveCard = isActive[index];
            const isFlippedCard = isFlipped[index];
            return (
              <motion.div
                className={`${style['item']} ${isActiveCard ? style['active'] : ''}`}
                onClick={() => handleFlip(index)}
                key={index}
                style={{ zIndex: isActiveCard ? 2 : 1, position: 'relative' }}
              >
                <motion.div
                  className={style['flip-card-inner']}
                  initial={false}
                  animate={{ rotateY: isFlippedCard ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                  onAnimationComplete={() => setIsAnimated(false)}
                  style={{ position: 'absolute' }}
                >
                  <div className={style['flip-card-front']}>
                    <h2 className={style['front-title']}>
                      {card.name}
                      </h2>
                    <img
                      src={card.gif}
                      alt="GIF"
                      width="100"
                      height="100"
                      className={isFlipped[index] ? style['display-none'] : style['front-gif']}
                    />
                  </div>

                  <div className={style['flip-card-back']}>
                    <div className={style['main__content']}>
                      <div className={style['img']}>
                        <img src={card.imgSrc} alt={card.name} />
                      </div>
                      <div className={style['content']}>
                        <h2>{card.name}</h2>
                        <h4>{card.position}</h4>
                        <p>{card.description}</p>
                      </div>
                      <div className={style['social']}>
                        <div className={style['social-icon']}>1</div>
                        <div className={style['social-icon']}>2</div>
                        <div className={style['social-icon']}>3</div>
                        <div className={style['social-icon']}>4</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {cards.map((_, index) => (
          <input
            key={index}
            type='radio'
            name='card'
            id={`c-${index + 1}`}
            checked={index === currentSlide}
            onChange={() => {
              handleSlideChange(index);
              handleFlip(index);
            }}
          />
        ))}

      </div>
    </section>
  );
}
