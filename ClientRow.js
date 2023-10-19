import "./App.css";
import React from "react";

class ClientRow extends React.Component {
    state = {};

    async componentDidMount() {
        this.setState({});
    }

    render() {
        return (
            <div key={this.props.client.id}>
                {this.props.client.name} ({this.props.client.email})
                <button onClick={() => this.props.deleteClient(this.props.client.id)}>
                    Delete
                </button>
            </div>
        );
    }
}
export default ClientRow;