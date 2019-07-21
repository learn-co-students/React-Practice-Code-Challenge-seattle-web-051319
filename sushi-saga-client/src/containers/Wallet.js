import React, { Fragment } from "react";

const Wallet = (props) => {

	return (
		<Fragment>
				<form onSubmit={event => props.addMoney(event)}>
					<label>
						Add money to balance:
						<input type="text" name="balanceIncrease" placeholder="(amount)" />
						<input type="submit" name="submit" value="Add" />
					</label>
				</form>
		</Fragment>
	)

}

export default Wallet;