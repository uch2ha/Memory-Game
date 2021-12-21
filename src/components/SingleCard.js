import React from 'react';
import "./SingleCard.css"

function SingleCard({ card, handleChoise, flipped, disabled}) {

  const handleClick = () => {
    if(!disabled){
      handleChoise(card)
    }
  }

	return (
		<div className="card">
			<div className={flipped ? "flipped" : ""}>
				<img className="front" src={card.src} alt="card front"/>
				<img
					className="back"
					src="/img/cover.png"
					onClick={handleClick}
					alt="card back"
				/>
				
			</div>
		</div>
	);
}

export default SingleCard;