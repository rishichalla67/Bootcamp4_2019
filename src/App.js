import React from "react";
import Search from "./components/Search";
import ViewBuilding from "./components/ViewBuilding";
import BuildingList from "./components/BuildingList";
import Credit from "./components/Credit";
import Add from "./components/Add";
//import RemoveBuilding from "./components/RemoveBuilding";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            selectedBuilding: 0,
            data: this.props.data
        };
    }
    dataAdd(newBuilding) {
        var data = this.state.data;
        var id = data[data.length - 1].id + 1;
        var newnewBuilding = {
            id: id,
            ...newBuilding
        };
        data.push(newnewBuilding);
        this.setState({
            data: data
        });
    }
    dataDelete(id) {
        var data = this.state.data;
        var filteredArray = data.filter(e => e.id !== id);
        this.setState({ data: filteredArray });
    }

    filterUpdate(value) {
        //Here you will need to set the filterText property of state to the value passed into this function
        this.setState({
            filterText: value
        });
    }

    selectedUpdate(id) {
        //Here you will need to update the selectedBuilding property of state to the id passed into this function
        this.setState({ selectedBuilding: id });
    }

    render() {
        return (
            <div className="bg">
                <div className="row">
                    <h1>UF Directory App</h1>
                </div>

                <Search filterUpdate={this.filterUpdate.bind(this)} />
                <main>
                    <div className="row">
                        <div className="column1">
                            <div className="tableWrapper">
                                <table className="table table-striped table-hover">
                                    <tr>
                                        <td>
                                            <b>Code Building</b>
                                        </td>
                                    </tr>
                                    <BuildingList
                                        data={this.state.data}
                                        filterText={this.state.filterText}
                                        selectedUpdate={this.selectedUpdate.bind(this)}
                                        dataDelete={this.dataDelete.bind(this)}
                                    />
                                </table>
                            </div>
                        </div>
                        <div className="column2">
                            <ViewBuilding
                                selectedBuilding={this.state.selectedBuilding}
                                data={this.state.data}
                            />
                            <Add dataAdd={this.dataAdd.bind(this)} />
                        </div>
                    </div>
                    <Credit />
                </main>
            </div>
        );
    }
}

export default App;
