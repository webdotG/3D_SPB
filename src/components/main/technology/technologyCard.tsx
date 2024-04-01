import styles from './technologyCard.module.scss';
import { useTransform, motion, useScroll, motionValue } from 'framer-motion';
import { useRef } from 'react';

interface TechnologyCardProps {
  i: number;
  title: string;
  description: string;
  descriptionTwo: string;
  src: string;
  color: string;
  progress: number | undefined;
  range: [number, number];
  targetScale: number;
  // link: string;
}


const TechnologyCard: React.FC<TechnologyCardProps> = ({
  i,
  title,
  description,
  descriptionTwo,
  src,
  color,
  progress,
  range,
  targetScale,
  // link
}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const motionProgress = motionValue(progress ?? 0)
  const scale = useTransform(motionProgress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{ backgroundColor: color, scale, top: `calc(21px + ${i * 0}px)` }}
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description} </p>
            <p>{descriptionTwo} </p>
            {/* <span>
               <a href={link} target="_blank">ссылка</a> 
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black" />
              </svg>
            </span> */}
          </div>

          <div className={styles.imageContainer}>
            <motion.div
              className={styles.inner}
              style={{ scale: imageScale, opacity: scrollYProgress }}
            >
              <video className={styles.video} autoPlay muted loop>
                <source src={`/3D_SPB/${src}`} type="video/mp4" />
              </video>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default TechnologyCard