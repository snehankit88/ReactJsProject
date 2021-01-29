import React, { useState } from 'react'
import './custom.css'
import './App.css'
import Card from './Card'
import faker from 'faker'
function App() {
  const [name, setName] = useState('')
  const [showCard, setShowCard] = useState(true)
  const [cards,setCards]= useState([
    {
      id:'u1',
      name:'snehankit',
      avatar:'./images/img_avatar.png',
      title:'Software Developer'
    },
    {
      id:'u2',
      name:'snehankit',
      avatar:'./images/img_avatar.png',
      title:'Software Developer'
    },
    {
      id:'u3',
      name:'snehankit1',
      avatar:'./images/img_avatar.png',
      title:'Software Developer'
    }
  ])

  const toggleShowCard = () => setShowCard(!showCard)

  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex,1)
    console.log('cards_copy',cards_copy)
    console.log('cards',cards)

    setCards(cards_copy);
  }

const ChangeNameHandler = (event,id)=> {
  //1 Which Card
  const cardIndex = cards.findIndex(card=>card.id === id)

  //2 make copy of card
  const cards_copy = [...cards]

  //3change name of specific card
  cards_copy[cardIndex].name  = event.target.value

  //4 set the cards with the latest version of card copy
  setCards(cards_copy)

}


  const cardsMarkup = showCard && 
  (
    cards.map((card,index)=>   <Card
      avatar={faker.image.people()}
      name={card.name}
      title={card.title}
      key={card.id}
      onDelete={()=> deleteCardHandler(index)}
      onChangeName = {(event)=> ChangeNameHandler(event,card.id)}    
    />)
)
 
  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>Hide card</button>
      {cardsMarkup}
    </div>

  );
}

export default App;
