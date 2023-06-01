import React from 'react'
import styles from './FeedBack.module.css'
import gplay from '../../Images/gplay.png'
import ios from '../../Images/ios.png'
import Wstar from '../../Images/whitestar.png'
import Card from '../Card/Card'


const FeedBack = () => { 
    // const elementRef = useRef(null);
    // const [arrowDisable, setArrowDisable] = useState(true);

    // const handleHorizantalScroll = (element, speed, distance, step) => {
    // let scrollAmount = 0;
    // const slideTimer = setInterval(() => {
    //     element.scrollLeft += step;
    //     scrollAmount += Math.abs(step);
    //     if (scrollAmount >= distance) {
    //     clearInterval(slideTimer);
    //     }
    //     if (element.scrollLeft === 0) {
    //     setArrowDisable(true);
    //     } else {
    //     setArrowDisable(false);
    //     }
    // }, speed)};


  return (
    <div className={styles.FeedBackCont}>
    <h1 className={styles.FeedBackHeader}>See what customers have to say</h1>
    <div className={styles.FeedBackOSCont}>
        <div className={styles.FeedBackGoogleCont}>
            <img src={gplay} alt=""/><p className={styles.Rating}><span className={styles.boldNo}>4.6</span>/5 rating</p><img src={Wstar} alt=""/> 
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.FeedBackAppleCont}>
            <img src={ios} alt=""/>
            <p className={styles.Rating}><span className={styles.boldNo}>4.1</span>/5 rating</p>
            <img src={Wstar} alt=""/>
        </div>
    </div>
    <div className={styles.CardCont}>
    <Card/>
    </div>
    </div>
  )
}

export default FeedBack