import React, { Fragment } from 'react'

const Sushi = (props) => {

  const handleClick = () => {
    if (props.moneyRemaining >= props.sushi.price && props.sushi.img_url) {
      props.eatSushi(props.sushi)
    }
  }

  const displayImage = () => {
    if (props.sushi.img_url) {
      return <img src={props.sushi.img_url} alt={props.sushi.name} width="100%" />
    }
    return null
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleClick}>
        {displayImage()}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi