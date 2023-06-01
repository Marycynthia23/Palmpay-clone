import React from 'react'
import styles from "./Download.module.css"
import cbn from '../../Images/card1cbn.png'
import deposits from '../../Images/card1deposits.png'
import footerPhone from '../../Images/FooterIphone.png';
import GooglePlayBlack from '../../Images/googlePlayBlack.png'
import appStoreBlack from '../../Images/appStoreBlack.png'





const Download = () => {
  return (
    <div className={styles.DownloadCont}>
        <div className={styles.DownloadContLeft}>
            <p className={styles.DownloadHeader}> Download The PalmPay App</p>
            <p className={styles.DownloadContText}>Register and start transacting in less than 2 minutes.</p>
            <div className={styles.DownloadBox}>
                <div>
                    <img src={GooglePlayBlack} className={styles.googlePlayBlack} alt=""/>
                    <div className={styles.DownloadMiniCont}><p className={styles.DownloadSmallText}>Licenced by CBN as a MMO</p><img src={cbn}/></div>
                </div>
                <div>
                    <img src={appStoreBlack} className={styles.appStoreBlack} alt=""/>
                    <div className={styles.DownloadMiniCont}><p className={styles.DownloadSmallText}>Deposits Insured by</p><img src={deposits}/></div>
                </div>
            </div>
        </div>
        <div className={styles.DownloadContRight}>
            <img src={footerPhone} alt=""/>
        </div>
    </div>
  )
}

export default Download