import style from './sponsors.module.scss'
import splitString from '../../../utils/stringSplit';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import logoOne from '../../../SVG/sponsors/logo-facebook-svgrepo-com.svg';
import logoTwo from '../../../SVG/sponsors/logo-reddit-svgrepo-com.svg';
import logoThre from '../../../SVG/sponsors/logo-steam-svgrepo-com.svg';
import logoFour from '../../../SVG/sponsors/logo-tux-svgrepo-com.svg';
import logoFive from '../../../SVG/sponsors/logo-twitch-svgrepo-com.svg';
import logoSix from '../../../SVG/sponsors/logo-xbox-svgrepo-com.svg';
import logoSeven from '../../../SVG/sponsors/logo-youtube-svgrepo-com.svg';

const logos = [
  logoOne,
  logoTwo,
  logoThre,
  logoFour,
  logoFive,
  logoSix,
  logoSeven
];

const title = 'Заказчики'

export default function Sponsors() {
  const titleChars = splitString(title);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  }

  return (
    <section className={style['sponsors']}>
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
      ))}</motion.h2>

      <div className={style['logos']}>
        <div className={style['logos-slide']}>
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt='sponsors logo' height='175px' />
          ))}
        </div>
        <div className={style['logos-slide']}>
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt='sponsors logo' height='175px' />
          ))}
        </div>
      </div>

    </section >
  )
}
