import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {	
	const displaySushis = () => {
		const slcStart = props.sushisIndex;
		const slcEnd = slcStart + 4; 
		
		return (
			props.allSushis.slice(slcStart, slcEnd).map(sushi => {
				return <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi}/>
			})
		)
	}

	return (
		<Fragment>
			<div className="belt">
				{displaySushis()}
				<MoreButton updateIndex={props.updateIndex}/>
			</div>
		</Fragment>
	)
}

export default SushiContainer;