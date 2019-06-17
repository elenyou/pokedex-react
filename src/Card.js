import React, { Component } from 'react';
import './Card.css';

const urlApi = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Card extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    let urlImg = `${urlApi}${id}.png`;

    return (
      <div className="Card">
        <h2 className="Card-title">{name}</h2>
        <img src={urlImg} alt={name}/>
        <div className="Card-data">Type: {type}</div>
        <div className="Card-data">Exp: {exp}</div>
      </div>
    )
  }
}

export default Card;



