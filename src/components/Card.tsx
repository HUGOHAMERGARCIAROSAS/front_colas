import { FC } from 'react'
import '../styles/Card.css'

import { CardProps } from '../types'

const Card: FC<CardProps> = ({ id, title, content, image }) => {
  return (
    <div className="card" key={id}>
      <a href="/" className="hero-image-container">
        <img className="hero-image" src={image} alt="Spinning glass cube" />
      </a>
      <main className="main-content">
        <h1><a href="#" style={{ textDecoration: 'none' }}>{title}</a></h1>
        <p>{content}</p>
        <div className="flex-row">
          <div className="coin-base">
            <img src={image} alt="Ethereum" className="small-image" />
            <h2>0.041 ETH</h2>
          </div>
          <div className="time-left">
            <img src={image} alt="clock" className="small-image" />
            <p>3 days left</p>
          </div>
        </div>
      </main>
      <div className="card-attribute">
        <img src={image} alt="avatar" className="small-avatar" />
        <p>Creation of <span><a href="#">Jules Wyvern</a></span></p>
      </div>
    </div>
  )
}

export default Card