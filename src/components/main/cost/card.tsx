import style from './card.module.scss';
import { motion, useMotionValue, useTransform } from "framer-motion";
import  Details  from "./Details";

import one from "../../../PNG/1-Number.png";
import two from "../../../PNG/2-Number.png";
import three from "../../../PNG/3-Number.png";

interface CardProps {
  cardType: string;
}

export default function Card({ cardType }: CardProps) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  let imageSource;
  let cardText;

  switch (cardType) {
    case 'first':
      imageSource = one;
      cardText = 'пакет';
      break;
    case 'second':
      imageSource = two;
      cardText = 'пакет';
      break;
    case 'third':
      imageSource = three;
      cardText = 'пакет';
      break;
    default:
      imageSource = one;
      cardText = 'Default';
  }

  return (
    <section className={style['card']}>
      
      <div className={style['CardWrapper']}>
      <motion.div className={style['CardContainer']}
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <div className={style['TopContainer']}>
          <div className={style['CircleWrapper']}>
            <div className={style['Circle']}></div>
          </div>
          <div className={style['Text']}>{cardText}</div>
          <div className={style['Wrapper']}>
            <motion.div className={style['Item']}
              style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 100000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
            >
              <img src={imageSource} />
            </motion.div>
          </div>
          
        </div>
        <div className={style['BottomContainer']}>
          <Details />
        </div>
      </motion.div>
    </div>

    </section>

  )
}
