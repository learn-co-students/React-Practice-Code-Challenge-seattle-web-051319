import React, { Fragment } from 'react'

const Sushi = (props) => {

  const handleClick = event => {
    if (props.moneyRemaining > props.sushi.price) {
      if (event.target.nodeName === 'IMG') {
        event.target.parentNode.removeChild(event.target)
      }
      else {
        event.target.removeChild(event.target.children[0])
      }
      props.eatSushi(props.sushi)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleClick}>
        { 
            <img src={props.sushi.img_url} alt={props.sushi.name} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi