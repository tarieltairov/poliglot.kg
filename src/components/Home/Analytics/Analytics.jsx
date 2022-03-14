import React, { useEffect, useRef, useState } from 'react';
import style from './analytics.module.scss';

function Analytics() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { innerHeight, pageYOffset } = window;

      if (ref) {
        if (ref.current.offsetTop <= innerHeight + pageYOffset - 50) {
          setInView(true);
        } else {
          setInView(false);
        }
      }
    });
    return window.removeEventListener('scroll', () => {
      const { innerHeight, pageYOffset } = window;

      if (ref) {
        if (ref.current.offsetTop <= innerHeight + pageYOffset - 50) {
          setInView(true);
        } else {
          setInView(false);
        }
      }
    });
  }, [ref]);

  return (
    <div className='container' ref={ref}>
      {inView && (
        <div className={style.analytics}>
          <div className={style.analytics__wrapper}>
            <div className={style.analytics__violetText}>
              <div
                className={`${style.analytics__wrapper__num} ${style.analytics__wrapper__num1}`}
              />
              +
            </div>
            <p className={style.analytics__simpleText}>
              Happy <br /> clients
            </p>
          </div>
          <div className={style.analytics__wrapper}>
            <div className={style.analytics__violetText}>
              <div
                className={`${style.analytics__wrapper__num} ${style.analytics__wrapper__num2}`}
              />
              k+
            </div>
            <p className={style.analytics__simpleText}>
              Lines <br /> of code
            </p>
          </div>
          <div className={style.analytics__wrapper}>
            <div className={style.analytics__violetText}>
              <div
                className={`${style.analytics__wrapper__num} ${style.analytics__wrapper__num3}`}
              />
              %
            </div>
            <p className={style.analytics__simpleText}>
              Of positive <br /> reviews
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Analytics;
