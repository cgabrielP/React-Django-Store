import React from 'react'
import ad1 from '../assets/ad_despacho.png'
import ad2 from '../assets/banner_ads.png'
const Carrousel = () => {
  return (
    <div
        id="carouselExampleIndicators"
        className="carousel slide my-3"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner rounded-4">
          <div className="carousel-item active">
            <img
              src={ad1}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={ad2}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-secondary rounded"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-secondary rounded"
            aria-hidden="true"
          ></span>
        </button>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
      </div>
  )
}

export default Carrousel