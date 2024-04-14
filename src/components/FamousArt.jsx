import React from 'react'
import '../pages/Art/art.css'
import { vangogh, davinci, monet, other } from '../data'

const FamousArt = () => {
  return (
    <>
    <div className='art-container'>
      {/* Van Gogh Collection */}
      <section className='vangogh-container art-collection'>
        <h2>Vincent van Gogh Collection</h2>
        <div className='art-collection-grid'>
          {vangogh.map(({ id, img, title }) => (
            <div className='art-wrapper' key={id}>
              <div className='art-img'>
                <img src={img} alt="Van Gogh Artwork" />
              </div>
              <div className='art-title'>
                <p>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='davinci-container art-collection'>
        <h2>Leonardo da Vinci Collection</h2>
        <div className='art-collection-grid'>
          {davinci.map(({ id, img, title }) => (
            <div className='art-wrapper' key={id}>
              <div className='art-img'>
                <img src={img} alt="Da Vinci Artwork" />
              </div>
              <div className='art-title'>
                <p>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='monet-container art-collection'>
        <h2>Claude Monet Collection</h2>
        <div className='art-collection-grid'>
          {monet.map(({ id, img, title }) => (
            <div className='art-wrapper' key={id}>
              <div className='art-img'>
                <img src={img} alt="Monet Artwork" />
              </div>
              <div className='art-title'>
                <p>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='other-container art-collection'>
        <h2>Other Famous Paintings Collection</h2>
        <div className='art-collection-grid'>
          {other.map(({ id, img, title }) => (
            <div className='art-wrapper' key={id}>
              <div className='art-img'>
                <img src={img} alt="Other Famous Painting" />
              </div>
              <div className='art-title'>
                <p>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  )
}

export default FamousArt
