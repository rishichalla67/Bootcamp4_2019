import React from "react";
import RemoveBuilding from "./RemoveBuilding";

class BuilingList extends React.Component {
	showID(id) {
		this.props.selectedUpdate(id);
	}

	render() {
		//console.log("This is my directory file", this.props.data);
		const data = this.props.data;

		const buildingList = data.map(directory => {
			return (
				<tr key={directory.id}>
					<td>{directory.code} </td>
					<td onClick={e => this.showID(directory.id, e)}>
						{" "}
						{directory.name}{" "}
					</td>
					<RemoveBuilding
						dataDelete={this.props.dataDelete}
						id={directory.id}
					/>
				</tr>
			);
		});
		const filteredList = buildingList.filter(el => {
			return (
				el.props.children[1].props.children[1]
					.toLowerCase()
					.indexOf(this.props.filterText.toLowerCase()) !== -1
			);
		});
		return <div>{filteredList}</div>;
	}
}
export default BuilingList;