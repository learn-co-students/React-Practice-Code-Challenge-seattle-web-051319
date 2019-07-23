import React from 'react'

const MoreButton = (props) => {
  const handleOnClick = () => {
    props.displayMoreSushi()
  }

    return <button onClick={handleOnClick}>
            More sushi!
          </button>
}

export default MoreButton