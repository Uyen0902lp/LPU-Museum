import React from 'react';
import './ticket.css';
import LocationnHour from '../../components/LocationnHour';
import Footer from '../../components/Footer';
import Newsletter from '../../components/Newsletter'
import SectionHeader from '../../components/SectionHeader';
import image from '../../assets/images/forticket.png';
import { PiTicket } from "react-icons/pi";

const Ticket = () => {
  return (
    <>
      <div className='ticket-intro-img'>
        <img src={image} alt="LPU Museum Entrance" />
      </div>
      <LocationnHour />
      {/* Entry charges */}
      <SectionHeader icon={<PiTicket style={{ color: 'var(--color-accent6)' }} />} title="Entry Charges" />
      <div className='ticket-entry-container'>
        <div className='ticket-entry-content'>
          <ul className="prices">
            <li>Adult Ticket <span>$25</span></li>
            <li>Senior (65 and over) <span>$20</span></li>
            <li>Student (ID Required) <span>$15</span></li>
            <li>Youth Ticket (18 and under) <span>$10</span></li>
            <li>Children Ticket (under 10) <span>Free</span></li>
          </ul>
        </div>
        {/* <div>
        <button className="btn-book">Book</button>
        </div> */}
      </div>
      <Newsletter/>
      <Footer />
    </>
  )
}

export default Ticket;
