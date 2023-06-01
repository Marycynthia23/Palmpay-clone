import React from 'react'
import styles from './Partners.module.css'
import partner11 from '../../Images/partners11.png'
import partner12 from '../../Images/partners12.png'
import partner13 from '../../Images/partners13.png'
import partner14 from '../../Images/partners14.png'
import partner15 from '../../Images/partners15.png'
import partner16 from '../../Images/partners16.png'
import partner21 from '../../Images/partners21.png'
import partner22 from '../../Images/partners22.png'
import partner23 from '../../Images/partners23.png'
import partner24 from '../../Images/partners24.png'
import partner25 from '../../Images/partners25.png'
import partner26 from '../../Images/partners26.png'
import partner27 from '../../Images/partners27.png'
import partner31 from '../../Images/partners31.png'
import partner32 from '../../Images/partners32.png'
import partner33 from '../../Images/partners33.png'
import partner34 from '../../Images/partners34.png'
import partner35 from '../../Images/partners35.png'
import partner36 from '../../Images/partners36.png'
import partner37 from '../../Images/partners37.png'


const Partners = () => {
  return (
    <div className={styles.PartnerCont}>
        <p className={styles.PartnerHeader}>Our Partners</p>
        <div className={styles.PartnerRowOne}>
            <img src={partner11}/>
            <img src={partner12}/>
            <img src={partner13}/>
            <img src={partner14}/>
            <img src={partner15}/>
            <img src={partner16}/>
        </div>
        <div className={styles.PartnerRowTwo}>
            <img src={partner21}/>
            <img src={partner22}/>
            <img src={partner23}/>
            <img src={partner24}/>
            <img src={partner25}/>
            <img src={partner26}/>
            <img src={partner27}/>
        </div>
        <div className={styles.PartnerRowThree}>
            <img src={partner31}/>
            <img src={partner32}/>
            <img src={partner33}/>
            <img src={partner34}/>
            <img src={partner35}/>
            <img src={partner36}/>
            <img src={partner37}/>
        </div>
    </div>
  )
}

export default Partners