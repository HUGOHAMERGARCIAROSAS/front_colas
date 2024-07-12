import { FC } from 'react'
import '../styles/Card.css'

interface CardProps {
  title: string
  content: string
}

const Card: FC<CardProps> = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default Card