import React from 'react'
import { MdOutlinePlace } from "react-icons/md";
import { placeNhour } from '../data'
import SectionHeader from './SectionHeader'
import '../pages/Visit/visit.css'

const LocationnHour = () => {
  return (
      <section>
        <div>
            <SectionHeader icon={<MdOutlinePlace style={{ color: 'var(--color-accent6)'}}/>} title="Location and Hour"/>
            <div className="placeNhour__inner">
              {
                placeNhour.map(({id, place, des, hour, extended_hour, closed, more_closed, place_img}) => ( 
                  <div className="placeNhour__in" key={id}>
                    <img src={place_img} alt="Place" />
                    <div className="placeNhour__content">
                      <h2>{place}</h2>
                      <h4>{des}</h4>
                      <p><strong>{hour.label}</strong> {hour.value}</p>
                      <p><strong>{extended_hour.label}</strong> {extended_hour.value}</p>
                      <p><strong>{closed.label}</strong> {closed.value}</p>
                      <p><strong>{more_closed}</strong></p>
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
      </section>
  )
}

export default LocationnHour