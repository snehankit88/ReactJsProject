import React, { useState } from 'react'
import './custom.css'
import './App.css'
import Card from './Card'
import faker from 'faker'
function App() {
  const [name, setName] = useState('')
  const [showCard, setShowCard] = useState(true)
  const buttonMarkup = (
    <div>
      <button className="button">YES</button>
      <button className="button button3">NO</button>
    </div>
  )
  const changeNameHandler = () => {
    setName('snehankit Chikhalekar')
  }
  const changeInputHandler = event => setName(event.target.value)
  const toggleShowCard = () => setShowCard(!showCard)
  const cardsMarkup = showCard && <Card
    avatar={faker.image.people()}
    name={name}
    title={faker.name.jobTitle()}
    onChangeName={() => changeNameHandler('sneha Chikhalekar')}
    onChangeInput={changeInputHandler}
  >
    {buttonMarkup}
  </Card>
  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>Hide card</button>
      {cardsMarkup}



    </div>

  );
}

export default App;
