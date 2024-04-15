import React from 'react'
import Footer from '../../components/Footer';
import NewsLetter from '../../components/Newsletter';
import './about.css'
import imgintro from '../../assets/images/aboutUsimg.jpg'

const About = () => {
  return (
    <>
    {/* Intro */}
    <div className='about-section'>
    <section className='intro-dessss'>
      <h1>LPU Museum Organisation</h1>
      <p>Who are we? What do we do?</p>
      <p>Learn more about the organisation of LPU Museum</p>
    </section>

      {/* mission */}
      <section className='section-mission'>
        <div className="section-mission-container">
          <div className="mission-image">
              <img src={imgintro} alt="intro" />
          </div>
          <div className="mission-content">
            <h2>Our Mission</h2>
              <p>At LPU Museum, our mission is to preserve and showcase the breadth of human culture and history. We strive to engage and inspire a diverse audience through our comprehensive collections and exhibits. Our commitment extends beyond exhibition to the protection and preservation of artifacts that are significant to cultural heritage.</p>
              <p>We are dedicated to advancing public understanding and appreciation of the arts, sciences, and humanities. Through educational programs, innovative research, and collaborative projects, we aim to foster a deeper appreciation of the complexities of human civilization across time and space.</p>
          </div>
        </div>
      </section>

      {/* history */}
      <section className='section-history'>
        <div className="section-history-container">
          <div className="history-content">
            <h2>Our History</h2>
              <p>The LPU Museum, established in 1923, is renowned for its vast collections that encompass various eras and disciplines. It has evolved from a modest establishment into a prominent cultural institution, offering a window into both ancient and modern worlds.</p>
              <p>As a guardian of history and advocate for cultural understanding, the LPU Museum enriches public knowledge through its dynamic exhibits and educational initiatives. It remains a vibrant link to our heritage, inviting exploration of humanity's multifaceted legacy.</p>
          </div>
          <div className="history-image">
              <img src={imgintro} alt="history" />
          </div>
        </div>
      </section>  

      {/* leader */}
      <section className='section-leader'>
        <div className="section-leader-container">
          <h2>Leadership</h2>
          <div className='leader-info'>
            {/* Leader 1 */}
            <div className='leader-item'>
              <div className='leader-img'>
                <img src={imgintro} alt="Leader One" />
              </div>
              <div className='leader-des'>
              <p>Dr. Elizabeth M. Hargrove</p>
                <p className='job'>Director</p>
                <p className='JD'>Since 2010, Dr. Hargrove has led LPU Museum to significant growth. Her leadership focuses on making art accessible and engaging, backed by her extensive experience and a Ph.D. in Art History from Yale University.</p>
              </div>
            </div>
            {/* Leader 2 */}
            <div className='leader-item'>
              <div className='leader-img'>
                <img src={imgintro} alt="Leader Two" />
              </div>
              <div className='leader-des'>
              <p> Mr. Jonathan P. Lee</p>
                <p className='job'>Chief Curator</p>
                <p className='JD'>With over 20 years in the field and a Master's in Museum Studies from the University of Toronto, Mr. Lee has curated innovative exhibitions that foster interactive visitor experiences.</p>
              </div>
            </div>
            {/* Leader 3 */}
            <div className='leader-item'>
              <div className='leader-img'>
                <img src={imgintro} alt="Leader Three" />
              </div>
              <div className='leader-des'>
              <p>Ms. Angela Torres</p>
                <p className='job'>Director of Education</p>
                <p className='JD'>Ms. Torres is at the forefront of integrating technology with arts education at LPU Museum, enhancing learning through innovative programs that reach a wide audience.</p>
              </div>
            </div>
          </div>
          <div className='leader-diagram'>
            <h3>Organizational structure</h3>
            <img src={imgintro} alt="Organizational Structure" />
          </div>
        </div>
      </section>

    {/* professional activities */}
      <section className='section-proacti'>
        <h2>Professional Activities</h2>
        <div className='section-proacti-container'>

          {/* research and collect */}
          <div className='proacti-res-col'>
            <div className='proacti-res-col-content'>
            <div className='res-col-img'>
              <img src={imgintro} alt="Organizational Structure" />
            </div>
              <div className='res-col-des'>
                <h4>Research and Collect</h4>
                <p>The LPU Museum is committed to advancing the understanding and appreciation of art through meticulous research and strategic acquisitions. Our efforts focus on enriching the museum's collections and providing in-depth insights into diverse artistic disciplines.</p>
                <p>We strive to preserve and expand our collections, ensuring that they reflect a broad spectrum of artistic expressions. Our team diligently works to uncover significant works that offer both historical value and contemporary relevance, enhancing the educational and cultural experience for all visitors.</p>
              </div>
            </div>
          </div> 

          {/* exhibition */}
          <div className='section-ex-container'>
            <div className='proacti-ex-collect'>
              <div className='proacti-ex-content'>
                <div className='ex-des'>
                  <h4>Exhibition</h4>
                  <p>The LPU Museum's exhibitions are curated to spark curiosity and dialogue. Each exhibition is designed to offer unique insights into various art forms, ranging from classical works to contemporary innovations. Our exhibitions serve as a bridge connecting the past with the present, inviting visitors to explore the rich tapestry of human creativity.</p>
                  <p>Through these exhibitions, the museum not only showcases artistic achievements but also fosters an environment of learning and engagement. We aim to inspire our visitors by providing immersive experiences that are both informative and transformative.</p>
                </div>
                <div className='ex-img'>
                  <img src={imgintro} alt="Organizational Structure" />
                </div>
              </div>
            </div>
          </div>

          {/* education */}
          <div className='proacti-res-col'>
            <div className='proacti-res-col-content'>
              <div className='res-col-img'>
                <img src={imgintro} alt="Organizational Structure" />
              </div>
              <div className='res-col-des'>
                <h4>Education</h4>
                <p>The LPU Museum is committed to fostering a deep appreciation of art and history through its comprehensive educational initiatives. We offer a range of programs designed to engage audiences of all ages, from interactive workshops to guided tours that make learning both accessible and enjoyable.</p>
                <p>Our educational programs are crafted by experts to inspire curiosity, creativity, and a lifelong love of learning. These initiatives not only enhance visitors' understanding of the exhibitions but also connect them more deeply with the cultural narratives and artistic expressions on display.</p>
              </div>
            </div>
          </div> 

          {/* Repair and Restoration */}
          <div className='section-ex-container'>
            <div className='proacti-ex-collect'>
              <div className='proacti-ex-content'>
                <div className='ex-des'>
                  <h4>Repair and Restoration</h4>
                  <p>The LPU Museum takes great pride in its meticulous restoration and conservation efforts. Our dedicated team works tirelessly to ensure the longevity and preservation of the artifacts and artworks that form our expansive collection.</p>
                  <p>Through cutting-edge techniques and traditional methods, we restore pieces to their former glory, safeguarding cultural heritage and allowing future generations to enjoy these treasures. Our commitment extends beyond restoration to include preventive conservation, ensuring the ongoing care of our collections.</p>
                </div>
                <div className='ex-img'>
                  <img src={imgintro} alt="Organizational Structure" />
                </div>
              </div>
            </div>
          </div>

        </div> 
      </section> 
    </div>
    <NewsLetter/>
    <Footer/>
    </>
    
  )
}

export default About