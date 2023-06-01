import React from 'react'
import styles from './Footer.module.css'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";


const Footer = () => {
  return (



    <div className={styles.FooterCont}>
        <div className={styles.Col}>
            <li className={styles.FooterHeader}>Contact us</li>
            <li className={styles.ColList}><a className={styles.ColLink}><span style={{color: '#363636'}}>Email:</span> support@palmpay.com</a></li>
            <li className={styles.ColList}><a className={styles.ColLink}><span style={{color: '#363636'}}>Phone:</span> 018886888</a></li>
            <div className={styles.Socials}>
            <div className={styles.SocialMedia}><FaFacebookF style={{color:'#8f00ff', fontSize: '28px'}} /></div>
            <div className={styles.SocialMedia}><AiFillInstagram style={{color:'#8f00ff' , fontSize: '28px'}} /></div>
            <div className={styles.SocialMedia}><BsTwitter  style={{color:'#8f00ff' , fontSize: '26px'}}/></div>
            <div className={styles.SocialMedia}><RiSendPlaneFill  style={{color:'#8f00ff' , fontSize: '28px'}}/></div>

          
        </div>
        </div>
        <div className={styles.Col}>
        <li className={styles.FooterHeader}>Personal</li>
        <li className={styles.ColList}><a className={styles.ColLink}>PalmPay App</a></li>

        </div>
        <div className={styles.Col}>
        <li className={styles.FooterHeader}>Agents</li>
        <li className={styles.ColList}><a className={styles.ColLink}>POS</a></li>
        <li className={styles.ColList}><a className={styles.ColLink}>Apply Now</a></li>

        </div>
        <div className={styles.Col}>
        <li className={styles.FooterHeader}>Company</li>
        <li className={styles.ColList}><a className={styles.ColLink}>About us</a></li>
        <li className={styles.ColList}><a className={styles.ColLink}>Career</a></li>
        <li className={styles.ColList}><a className={styles.ColLink}>Blog</a></li>
        <li className={styles.ColList}><a className={styles.ColLink}>Press</a></li>

        </div>
        <div className={styles.Col}>
        <li className={styles.FooterHeader}>Legal</li>
        <li className={styles.ColList}><a className={styles.ColLink}>Privacy & Cookie Policy</a></li>
        <li className={styles.ColList}><a className={styles.ColLink}>Terms & Conditions</a></li>
        </div>

    </div>
  )
}

export default Footer