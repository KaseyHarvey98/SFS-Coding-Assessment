/* eslint-disable no-useless-constructor */
import React, {Component} from "react";
import {connect} from "react-redux";
import Row from "./Row";
import {updateTotal} from "../store/balance";
import {selectAll} from "../store/rows";
import {fetchDebts} from "../store/debts";

class Table extends Component {
	constructor(props) {
		super(props);
		this.handleSelectAll = this.handleSelectAll.bind(this);
	}
	componentDidMount() {
		this.props.fetchDebts();
	}

	handleSelectAll(e) {
		const {debts, checkedRows, updateTotal, selectAll} = this.props;
		// get total checkboxes
		const totalCheckboxes = Array.from(
			document.getElementsByClassName("checkbox-row")
		);
		// if all boxes are checked, unselect all. else select all
		if (checkedRows === totalCheckboxes.length) {
			totalCheckboxes.forEach(checkbox => (checkbox.checked = false));
			updateTotal(0);
			selectAll(0);
			e.target.checked = false;
		} else {
			totalCheckboxes.forEach(checkbox => (checkbox.checked = true));
			updateTotal(debts.reduce((acc, debt) => acc + debt.balance, 0));
			selectAll(totalCheckboxes.length);
			e.target.checked = true;
		}
	}
	render() {
		// this.props.fetchDebts();
		const {debts} = this.props;
		return (
			<div>
				<table>
					<caption> Strategic Financial Solutions!</caption>
					<thead>
						<tr>
							<td>
								<input
									type="checkbox"
									name="all"
									onChange={this.handleSelectAll}
								/>
								&nbsp;
							</td>
							<th>Creditor</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Min Pay%</th>
							<th>Balance</th>
						</tr>
					</thead>
					<tbody>
						{debts.map(debt => (
							<Row debt={debt} key={debt.id} />
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	debts: state.debts,
	checkedRows: state.rows,
});

const mapDispatchToProps = dispatch => ({
	fetchDebts: () => dispatch(fetchDebts()),
	updateTotal: total => dispatch(updateTotal(total)),
	selectAll: all => dispatch(selectAll(all)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
