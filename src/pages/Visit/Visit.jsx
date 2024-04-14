import React from 'react'
import './visit.css'
import Header from '../../components/Header'
import Collection from '../../components/Collection'
import LocationnHour from '../../components/LocationnHour'
import WhatsNew from '../../components/WhatsNew'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'



const Visit = () => {
  return (
    <>
      <Header/>
      <Collection/>
      <LocationnHour/>
      <WhatsNew/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Visit