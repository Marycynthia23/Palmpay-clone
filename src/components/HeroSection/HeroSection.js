import React from 'react'
import styles from "./HeroSection.module.css"
import googlePlayBlack from "../../Images/googlePlayBlack.png";
import appStoreBlack from "../../Images/appStoreBlack.png";
import mockupOne from "../../Images/card1top.png"

const HeroSection = () => {
  return (
    <div className={styles.HeroCont}>
        <div className={styles.HeroLeft}>
            <p className={styles.HeroBoldText}>Digital <span className={styles.heroSpanText}>Finance</span><br/> That <span className={styles.heroSpanText}>Fits Your Life</span></p>
            <p className={styles.HeroMediumText}>An intuitive digital wallet with account opening, money transfer and bill payments in one. Earn as you spend.</p>
            <div className={styles.HeroBtnLinks}>
                <img className={styles.googlePlayBlack} src={googlePlayBlack} alt="" />
                <img className={styles.appStoreBlack}src={appStoreBlack} alt=""/>
            </div>
        </div>
        <div className={styles.HeroRight}>
            <img className={styles.mockupOne} src={mockupOne} height="556px" width="571px" alt=""/>
        </div>
    </div>
  )
}

export default HeroSection