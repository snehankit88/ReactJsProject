import React from 'react'
import './App.css'
import myimg from './images/img_avatar.png'


const Card = props => {
    console.log("av",props.avatar)
    console.log("mg",myimg)
    return (
        <div>
            <div className="card">
                <img src={props.avatar} alt="Avatar" style={{ width: '100%' }} />
                <div className="container">
                    <h4><b>{props.name}</b></h4>
                    <p>{props.title}</p>
                    <input type="text" onChange={props.onChangeInput} />
                    <p><button className="button" onClick={props.onChangeName}/></p>
                    <p>{props.children}</p>
                </div>
            </div>
           
        </div>
    )
}
export default Card;
