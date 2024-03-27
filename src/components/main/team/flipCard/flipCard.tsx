import style from "./flipCard.module.scss"
import { useState } from "react"
import { motion } from "framer-motion"
import Kirill from '../../../../SVG/sponsors/logo-tux-svgrepo-com.svg';
import Sergei from '../../../../SVG/sponsors/logo-steam-svgrepo-com.svg';

export default function FlipCard() {

  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)

  const handleFlip = () => {
    if (!isAnimated) {
      setIsFlipped(!isFlipped)
      setIsAnimated(true)
    }
  }

  return (
    <section className={style['flipCard']}>

      <div className={style['flip-card']}
        onClick={handleFlip}
      >

        <motion.div className={style['flip-card-inner']}
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.5, animationDuration: 'normal' }}
          onAnimationComplete={() => { setIsAnimated(false) }}
        >
          <div className={style['flip-card-front']}
            style={{ backgroundImage: `url(${Kirill})` }}>
            <h2>flip-card-front</h2>
          </div>

          <div className={style['flip-card-back']}
            style={{ backgroundImage: `url(${Sergei})` }}>
            <h2>flip-card-backt</h2>
          </div>

        </motion.div>

      </div>

    </section>
  )
}
