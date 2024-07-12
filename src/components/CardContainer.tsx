import { FC } from 'react'
import Card from './Card'

import '../styles/CardContainer.css'

const CardContainer: FC = () => {
  return (
    <div className="card-container">
      <Card title="Card 1" content="Content for card 1" />
      <Card title="Card 2" content="Content for card 2" />
    </div>
  )
}

export default CardContainer