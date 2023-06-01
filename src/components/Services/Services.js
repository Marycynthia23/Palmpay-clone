import React from 'react'
import styles from './Services.module.css'
import EnjoyPayments from "../../Images/EnjoyPayments.png"
import GetMore from "../../Images/GetMore.png"
import {IoIosArrowForward} from 'react-icons/io';

const Services = () => {
  return (
    <div className={styles.ServiceCont}>
        <div className={styles.ServiceOne}>
            <div className={styles.Serviceleft}>
                <img src={EnjoyPayments} alt=""/>
            </div>
            <div className={styles.ServiceRight}>
            <p className={styles.ServiceBoldText}>Enjoy Fast And Reliable Payments</p>
                <p className={styles.ServiceMediumText}>It's fast and free to send money to any PalmPay user or Nigerian bank account. And you can be assured of the reliability of our platform - 99% of our customers have voted us as the most reliable payment platform in Nigeria.</p>
                <p className={styles.ServiceLinkText}>Learn more<IoIosArrowForward style={{position: "absolute", top:"0.57rem"}}/></p>
                
            </div>
        </div>
        <div className={styles.ServiceTwo}>
        <div className={styles.ServiceTwoLeft}>
        <p className={styles.ServiceTwoBoldText}>Get More For Your Money</p>
                <p className={styles.ServiceTwoMediumText}>Goodbye charges, hello rewards! With PalmPay you save on fees and earn as you spend through discounts and cashback. Get the app now and make your money go further.</p>
                <p className={styles.ServiceTwoBtn}>Get PalmPay</p>
            </div>
            <div className={styles.ServiceTwoRight}>
                <img src={GetMore} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Services