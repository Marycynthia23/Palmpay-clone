import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './Card.css'
import gplay from '../../Images/gplay.png'
import ios from '../../Images/ios.png'
import Wstar from '../../Images/whitestar.png'
import Ystar from '../../Images/yellowstar.png'
import user1 from '../../Images/user1.png'
import user2 from '../../Images/O.png'
import user3 from '../../Images/user3.png'


const Card = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

  return (
    <div >
        
        <div className='Cards' >
        <Slider {...settings}>
            <div className='FeedBackPersonCont'>
                <div className='CommentInfo'>
                <img src={user1} className='Users'/> 
                <div>
                    <p className='FeedBackPerson'>Sani Musa</p>
                    <img src={Ystar}/>
                </div>
                </div>
                <p className='FeedBackComment'>I have never ever seen an online app that works smoothly without any hitches like PalmPay</p>
            </div>
            <div className='FeedBackPersonCont'>
                <div className='CommentInfo'>
                <img src={user1} className='Users'/> 
                <div>
                    <p className='FeedBackPerson'>Sani Musa</p>
                    <img src={Ystar}/>
                </div>
                </div>
                <p className='FeedBackComment'>This app is amazing, they are never out of rewards, coupons for transactions.</p>
            </div><div className='FeedBackPersonCont'>
                <div className='CommentInfo'>
                <img src={user1} className='Users'/> 
                <div>
                    <p className='FeedBackPerson'>Sani Musa</p>
                    <img src={Ystar}/>
                </div>
                </div>
                <p className='FeedBackComment'>This app called palmpay is an amazing app that I love to use daily unlike others that charge too much</p>
            </div>
        
        
            <div className='FeedBackPersonCont'>
                <div className='CommentInfo'>
                <img src={user1} className='Users'/> 
                <div>
                    <p className='FeedBackPerson'>Sani Musa</p>
                    <img src={Ystar}/>
                </div>
                </div>
                <p className='FeedBackComment'>This app is amazing, they are never out of rewards, coupons for transactions.</p>
            </div>
            <div className='FeedBackPersonCont'>
                <div className='CommentInfo'>
                <img src={user1} className='Users'/> 
                <div>
                    <p className='FeedBackPerson'>Sani Musa</p>
                    <img src={Ystar}/>
                </div>
                </div>
                <p className='FeedBackComment'>I have never ever seen an online app that works smoothly without any hitches like PalmPay</p>
            </div><div className='FeedBackPersonCont'>
                <div className='CommentInfo'>
                <img src={user1} className='Users'/> 
                <div>
                    <p className='FeedBackPerson'>Sani Musa</p>
                    <img src={Ystar}/>
                </div>
                </div>
                <p className='FeedBackComment'>This app called palmpay is an amazing app that I love to use daily unlike others that charge too much</p>
            </div>
        
        
            <div className='FeedBackPersonCont'>
                <div className='CommentInfo'>
                <img src={user1} className='Users'/> 
                <div>
                    <p className='FeedBackPerson'>Sani Musa</p>
                    <img src={Ystar}/>
                </div>
                </div>
                <p className='FeedBackComment'>This app is amazing, they are never out of rewards, coupons for transactions.</p>
            </div>
            <div className='FeedBackPersonCont'>
                <div className='CommentInfo'>
                <img src={user1} className='Users'/> 
                <div>
                    <p className='FeedBackPerson'>Sani Musa</p>
                    <img src={Ystar}/>
                </div>
                </div>
                <p className='FeedBackComment'>I have never ever seen an online app that works smoothly without any hitches like PalmPay</p>
            </div><div className='FeedBackPersonCont'>
                <div className='CommentInfo'>
                <img src={user1} className='Users'/> 
                <div>
                    <p className='FeedBackPerson'>Sani Musa</p>
                    <img src={Ystar}/>
                </div>
                </div>
                <p className='FeedBackComment'>This app called palmpay is an amazing app that I love to use daily unlike others that charge too much</p>
            </div>
            </Slider>
        </div>
        
    </div>
  )
}

export default Card