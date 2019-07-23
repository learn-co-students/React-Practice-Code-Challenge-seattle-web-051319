import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        { 
          props.sushis.slice(props.currentIndex, props.currentIndex + 4).map((sushi, i) => <Sushi key={i} sushi={sushi} eatSushi={props.eatSushi}/>) 
        }
        <MoreButton displayMoreSushi={props.displayMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer