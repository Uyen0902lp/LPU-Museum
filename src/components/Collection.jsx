import React from 'react'
import '../pages/Visit/visit.css'
import { MdOutlineCollections } from "react-icons/md";
import SectionHeader from './SectionHeader'
import { collections } from '../data';
import Card from '../Card';
import { Link } from 'react-router-dom';
import AOS from "aos";
import 'aos/dist/aos.css';


const Collection = () => {
    AOS.init({
        duration: 1200,
    })

  return (
    <section className='collection'>
        <div>
            <SectionHeader icon={<MdOutlineCollections style={{ color: 'var(--color-accent6)'}}/>} title="Collections"/>
        </div>
        <div className='col__wrapper'>
            {
                collections.map(({id, img, title, info, path}) => (
                    <Card className="col__collection" key={id} 
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"> 
                        <div className='col__img-ctn'>
                            <Link to={path}>
                                <img src={img} alt={title} />
                            </Link>
                        </div>
                        <Link to={path}>
                            <h3 className='col__title'>{title}</h3>
                        </Link>
                        <h5 className='col__info'>{info}</h5>
                    </Card> 
                ))
            }
        </div>
        
    </section>
  )
}

export default Collection;
