import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import Services from '../components/Services/Services'
import FeedBack from '../components/FeedBack/FeedBack'
import styles from "./Home.module.css"
import Partners from '../components/Partners/Partners'
import Download from '../components/Download/Download'
import Footer from '../components/Footer/Footer'


const Home = () => {
  return (
    <div className={styles.HomeCont}>
        <Navbar/>
        <HeroSection/>
        <Services/>
        <FeedBack/>
        <Partners/>
        <Download/>
        <Footer/>
        
    </div>
  )
}

export default Home