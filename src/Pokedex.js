import React, { Component } from 'react';
import './Pokedex.css';
import Card from './Card';

export class Pokedex extends Component {
    render() {
        let title;
		if (this.props.isWinner) {
			title = <h1 className="Pokedex-winner">Winning Hand</h1>;
		} else {
			title = <h1 className="Pokedex-loser">Losing Hand</h1>;
		}
        return (
            <div className="Pokedex">
                {title}
                <p>Total experience: {this.props.exp} </p>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Card 
                            id={p.id}
                            name={p.name}
                            type={p.type}
                            exp={p.base_experience}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;

