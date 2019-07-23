import React, { Fragment } from 'react'

const Sushi = (props) => {
  const sushi = props.sushi;

  const handleOnClick = () => {
    props.eatSushi(sushi)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleOnClick}>
        { sushi.isEaten ? null : <img src={sushi.img_url} width="100%" /> }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi