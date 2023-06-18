import React from 'react'
import "./Bottom.css"

export const Bottombar=() =>{
  return (
    <div className='bottomBox'>

     <div className='Btop flex'>
         <div className='Tleft'>
             <h2 className='white'>Top companies choose <span className='purple'>Udemy Business</span> to build in-demand career skills.</h2>
         </div>
         <div className='Tright'>
             <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="" />
             <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="" />
             <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="" />
             <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="" />
             <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="" />

         </div>
     </div>
     
     <div className='hr'> </div>

     <div className='Bmiddle flex'>
         <div className='Mleft white flex'>
             <ul >
                 <li>Udemy Business</li>
                 <li>Teach on Udemy</li>
                 <li>Get the app</li>
                 <li>About us</li>
                 <li>Contact us</li>
                 
             </ul>

             <ul>
                 <li>Careers</li>
                 <li>Blog</li>
                 <li>Help and support</li>
                 <li>Affiliate</li>
                 <li>Investors</li>
             </ul>

             <ul>
                 <li>Terms</li>
                 <li>Privacy policy</li>
                 <li>Cookie setting</li>
                 <li>Sitemap</li>
                 <li>Accessibiity statement</li>
             </ul>
         </div>
         <div className='Mright white flex'>
             <div>
                <img className='Glogo' src="https://tse3.mm.bing.net/th?id=OIP.aG0ZnlB0DOMVjhYVM3TJ6AHaHa&pid=Api&P=0&w=175&h=175" alt="" />
             </div>
             <div><p className='Eng'>English</p></div>
         </div>
     </div>

     <div className='Bend flex'>
         <div className='Eleft'>
             <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="" />
         </div>
         <div className='Eright white'>
             <p>© 2022 Udemy, Inc.</p>
         </div>
     </div>
    </div>
  )
}

