import React from 'react'
import './art.css'
import FamousArt from '../../components/FamousArt'
import Footer from '../../components/Footer';
import art_header from '../../assets/images/art-header.png'
import art_header2 from '../../assets/images/art-header2.png'
import art_header3 from '../../assets/images/art-header3.png'
import art_header4 from '../../assets/images/art-header4.png'
import art_header6 from '../../assets/images/art-header6.png'
import art_header7 from '../../assets/images/art-header7.png'


const Art = () => {
  return (
    <>

    <div className='intro-art'>
      <h2>Let's explore LPU Museum Art Collection</h2>
      <h3>Art at LPU Museum: A Dialogue Across Time</h3>
      <p>Our galleries are sanctuaries where the whispers of history echo through the halls. Each exhibit is carefully crafted to not just display works of art, but to engage in a conversation with our guests. We believe art should stir the soul, challenge perceptions, and ignite a spark of curiosity that transcends the confines of the museum.</p>
      <p>At LPU Museum, we recognize the power of art to transform. It's more than a visual feast; it's an educational adventure that beckons the mind to explore and the heart to feel. Our commitment to providing an inclusive space for learning ensures that art lovers of all backgrounds find inspiration and insight within our walls.</p>
      <p>We welcome you to join us in this ever-evolving dialogue between the past and present. The LPU Museum is not just a repository of artifacts but a living, breathing space where art continues to shape our collective future. Here, amidst the canvas of history, we invite you to find your own connection to the timeless narrative of art.</p>
      <h4>Images from Van Gogh Exhibition in February, 2024</h4>
    </div>
    <div className='art_img_head'>
      <img src={art_header} alt="art_header" />
      <img src={art_header2} alt="art_header" />
      <img src={art_header3} alt="art_header" />
      <img src={art_header4} alt="art_header" />
      <img src={art_header6} alt="art_header" />
      <img src={art_header7} alt="art_header" />
    </div>
    <FamousArt/>
    <Footer/>
    </>
  )
}

export default Art