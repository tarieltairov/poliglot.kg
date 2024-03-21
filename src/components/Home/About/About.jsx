import React, { useState } from 'react';
import style from './About.module.scss';
import BoltIcon from '../../../assets/svg/Icon-bolt.svg';
import Image from 'next/image';
import ContentHeadTitle from '../../components/ContentHeadTitlte/ContentHeadTitle';
import truck1 from '../../../assets/new/truck1.jpg';
import truck2 from '../../../assets/new/truck2.jpg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className={style.main}>
      <div id={'about'} className='container'>
        <div className={style.block}>
          <div className={style.firstBlock}>
            <motion.div
              initial='hidden'
              whileInView='visible'
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className={style.heading}
            >
              <ContentHeadTitle title={'ABOUT US'} />
            </motion.div>
            <div className={style.content}>
              <motion.h4
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                Lorem, ipsum dolor.
              </motion.h4>
              <motion.div
                className={style.contentBlock}
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                <Image src={BoltIcon} />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, ipsum. Tempore ipsum est autem dignissimos?
                </p>
              </motion.div>
              <motion.div
                className={style.contentBlock}
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                <Image src={BoltIcon} />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsum architecto consequatur voluptatum maxime incidunt!
                </p>
              </motion.div>
            </div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              transition={{ duration: 0.5 }}
              variants={{
                visible: { scale: 1 },
                hidden: { scale: 0 },
              }}
              className={style.buttons}
            >
              <a href='/#contacts'>
                <button>Apply now</button>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.5 }}
            variants={{
              visible: { scale: 1 },
              hidden: { scale: 0 },
            }}
          >
            <Carousel
              activeIndex={index}
              onSelect={setIndex}
              className={style.slider}
            >
              <Carousel.Item>
                <Image src={truck1} width={900} height={600} />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={truck2} width={900} height={600} />
              </Carousel.Item>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
