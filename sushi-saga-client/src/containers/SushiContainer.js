import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi.js"

const SushiContainer = (props) => {

    const displaySushi = () => {
        return props.sushis.slice(props.currentIndex, props.currentIndex + 4).map((sushi, i ) => {
            return <Sushi key={i} sushi={sushi} eatSushi={props.eatSushi} />
        })
    }

  return (
    <Fragment>
      <div className="belt">
        {displaySushi()}
        <MoreButton  moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
