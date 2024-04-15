import React from 'react'
import './notFound.css'
import {Link} from 'react-router-dom'
import image from '../../assets/images/404 not found astronaut.png'
import Footer from '../../components/Footer'


const NotFound = () => {
  return (
    <>
    <section className='ctn'>
      <div className='container__nf-left'>
        <h3 className='h3__nf'>Oops</h3>
        <h1 className='h1__nf'>Page Not Found</h1>
      </div>
      <div className='container__nf-right'>
        <img src={image} alt="Page Not Found" />
      </div>
      <div className='container__nf-btn'>
        <Link to='/' className='btn'>Go Back</Link>
        <Link to='/ticket' className='btn2'>Plan My Visit</Link>
      </div>
    </section>
     <Footer/>
    </>
   
  )
}

export default NotFound