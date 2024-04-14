import React from 'react'
import { PiNewspaperClipping } from "react-icons/pi";
import { whatsnew } from '../data'
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader'
// import '../pages/Visit/visit.css'
import './whatsnew.css'


const WhatsNew = () => {
return (
      <section className='whatsnew__ctn'>
        <div>
            <SectionHeader icon={<PiNewspaperClipping style={{ color: 'var(--color-accent6)'}}/>} title="What's New"/>
            <div className="whatsnew__wrapper">
            {
                whatsnew.map(({id, title, des, img, path}) => (
                    <div className="whatsnew__card" key={id} > 
                        <div className='whatsnew__img'>
                            <Link to={path}>
                                <img src={img} alt={title} />
                            </Link>
                        </div>
                        <h3 className='whatsnew__title'>{title}</h3>
                        <h5 className='whatsnew__des'>{des}</h5>
                        <Link to={path}>
                            <p className='whatsnew_p'>Explore more</p>
                        </Link>
                    </div> 
                ))
            }
            </div>
        </div>
      </section>
    )
}
export default WhatsNew