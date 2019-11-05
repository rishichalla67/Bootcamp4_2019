import React from "react";

class ViewBuilding extends React.Component {
	render() {
		const target = this.props.data.find(
			e => e.id === this.props.selectedBuilding
		);
		//console.log(target);
		const targetDisplay =
			target === undefined ? (
				<div></div>
			) : (
				<table>
					<tbody>
					<tr key={target.id}>
						<td>{target.code} </td>
						<td> {target.name} </td>
						<td> {target.address}</td>
						<td>{target.coordinates ? target.coordinates.latitude : ""}</td>
						<td>{target.coordinates ? target.coordinates.longitude : ""}</td>
					</tr>
					</tbody>
				</table>
			);
		return (
			<div>
				<p>
					{" "}
					<i>Click on a name to view more information</i>
				</p>
				{targetDisplay}
			</div>
		);
	}
}
export default ViewBuilding;