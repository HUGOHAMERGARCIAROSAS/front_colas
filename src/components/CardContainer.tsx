import { FC, useEffect, useState } from 'react'
import axios from 'axios';

import Card from './Card'
import { CardProps } from '../types'

import '../styles/CardContainer.css'



const CardContainer: FC = () => {

  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('../data/cards.json');
      setCards(data)
    }

    fetchData();
  }, [])

  return (
    <div className="card-container">
      {cards.map((card: CardProps) => <Card key={card.id} {...card} />)}
    </div>
  )
}

export default CardContainer
